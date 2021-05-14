# -*- coding: utf-8 -*-
# @Time    : 2021/5/8 20:35
# @Author  : 咸鱼型233
# @File    : v1.2_use_urllib3.py
# @Software: PyCharm
# @Function: 
# @ChangeLog : 能跑起来了,但是返回状态码为462(麻了,放弃从官方示例入手了,转到v2.0
import base64
import json
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
        # img_base64为byte数据,不支持dumps,要转成字符串
        param = {'image': str(img_base64)}
        if kv_config is not None:
            param['configure'] = json.dumps(kv_config)
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

    # 定义一个PoolManager实例来生成请求,由该实例对象处理与线程池的连接以及线程安全的所有细节，不需要任何人为操作
    http = urllib3.PoolManager()
    response = http.request('POST', url=url, headers=headers, body=body)
    return response.status, response.headers, response.read()


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

    print("结果:", result_str)
    # result = json.loads(result_str)


if __name__ == '__main__':
    demo()
