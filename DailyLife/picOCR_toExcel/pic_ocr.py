# -*- coding: utf-8 -*-
# @Time    : 2021/5/14 8:35
# @Author  : 咸鱼型233
# @File    : pic_ocr.py
# @Software: PyCharm
# @Function: 
# @ChangeLog
def OCR_to_Excel_aliyunAPI(APPCODE, img_path):
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
