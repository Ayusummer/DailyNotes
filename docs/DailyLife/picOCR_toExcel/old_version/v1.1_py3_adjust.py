# -*- coding: utf-8 -*-
# @Time    : 2021/5/8 7:14
# @Author  : 咸鱼型233
# @File    : v1.1_py3_adjust.py
# @Software: PyCharm
# @Function: v1.0的py3适应性调整
# 修改记录 : 2021.5.8-20:34-改崩了,下一版用urllib3实现
import base64
import json
import urllib
import requests
import urllib3

from config import APPCODE, path_image


# 获取图片二进制数据的base64编码(API请求参数需要)
def get_img_base64(img_file):
    with open(img_file, 'rb') as infile:
        s = infile.read()
        return base64.b64encode(s)


# ---
def predict(url, appcode, img_base64, kv_config, old_format):
    # 构造请求参数(Body)
    if not old_format:
        param = {'image': str(img_base64)}
        if kv_config is not None:
            param['configure'] = json.dumps(kv_config)
        # param = json.dumps(param)
        body = json.dumps(param)
    else:
        param = {}
        pic = {'dataType': 50, 'dataValue': img_base64}
        param['image'] = pic

        if kv_config is not None:
            conf = {'dataType': 50, 'dataValue': json.dumps(kv_config)}
            param['configure'] = conf

        inputs = {"inputs": [param]}
        body = json.dumps(inputs)
    # 根据阿里云表格文字识别API的APPCODE构造Headers
    headers = {'Authorization': 'APPCODE %s' % appcode}
    # request = requests.post(url=url, headers=headers, data=body)
    try:
        # response = requests.get(request, timeout=10)
        response = requests.get(url=url, headers=headers, data=body)
        return response.code, response.headers, response.read()
    except Exception as e:
        return e.code, e.headers, e.read()


def demo():
    appcode = APPCODE
    url = 'https://form.market.alicloudapi.com/api/predict/ocr_table_parse'
    img_file = path_image

    # 如果输入带有inputs, 设置为True，否则设为False
    is_old_format = False
    config = {'format': 'html', 'finance': False, 'dir_assure': False}
    # 如果没有configure字段，config设为None
    # config = None

    img_base64data = get_img_base64(img_file)

    stat, header, content = predict(url, appcode, img_base64data, config, is_old_format)

    if stat != 200:
        print('Http status code: ', stat)
        print('Error msg in header: ', header['x-ca-error-message'] if 'x-ca-error-message' in header else '')
        print('Error msg in body: ', content)
        exit()
    if is_old_format:
        result_str = json.loads(content)['outputs'][0]['outputValue']['dataValue']
    else:
        result_str = content

    print(result_str)
    # result = json.loads(result_str)


if __name__ == '__main__':
    demo()
