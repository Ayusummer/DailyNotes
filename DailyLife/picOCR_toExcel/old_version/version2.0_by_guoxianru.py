# -*- coding: utf-8 -*-
# @Time    : 2021/5/8 7:07
# @Author  :
# 参考链接 : https://github.com/guoxianru/learn_forever/blob/master/Python/OCR%EF%BC%9A%E8%AF%86%E5%88%AB%E8%A1%A8%E6%A0%BC.py
# @File    : version2.0_by_guoxianru.py
# @Software: PyCharm
# @Function:
# @CHANGELOG : 调试完成,可以使用
from config import APPCODE, path_image


def OCR_to_Excel_aliyunAPI(img_path):
    """
    阿里云API识别(表格识别)
    APPCODE：应用密钥
    """
    from json import dumps
    from requests import post
    from base64 import b64decode, b64encode
    try:
        img_base64 = b64encode(open(img_path, "rb").read()).decode("ascii")
        url = "https://form.market.alicloudapi.com/api/predict/ocr_table_parse"
        old_format = False
        config = {"format": "xlsx", "finance": False, "dir_assure": False}
        if not old_format:
            param = {"image": img_base64}
            if config is not None:
                param["configure"] = dumps(config)
            data = dumps(param)
        else:
            param = {}
            pic = {"dataType": 50, "dataValue": img_base64}
            param["image"] = pic
            if config is not None:
                conf = {"dataType": 50, "dataValue": dumps(config)}
                param["configure"] = conf
            inputs = {"inputs": [param]}
            data = dumps(inputs)
        headers = {
            "Authorization": "APPCODE %s" % APPCODE,
            "Content-Type": "application/json; charset=UTF-8",
        }
        response = post(url=url, headers=headers, data=data)
        if response.status_code == 200:
            if old_format:
                result = response.json()["outputs"][0]["outputValue"]["dataValue"]
            else:
                result = response.json()
            print(result)   # 输出查看返回响应
            table = b64decode(result["tables"])
            with open("test.xlsx", "wb") as f:
                f.write(table)
    except Exception as e:
        print(e)


