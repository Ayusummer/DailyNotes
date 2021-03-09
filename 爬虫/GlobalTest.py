'''
Author: your name
Date: 2021-03-04 09:32:55
LastEditTime: 2021-03-04 09:36:03
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \DailyNotes\爬虫\GlobalTest.py
'''
import requests
import json
import os

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'requests.txt'))

def requests_form():
    url = 'http://httpbin.org/post'
    data = {'k1':'v1', 'k2':'v2'}
    response = requests.post(url, data)
    return response

def requests_json():
    url = 'http://httpbin.org/post'
    data = s = json.dumps({'k1': 'v1', 'k2': 'v2'})
    response = requests.post(url, data)
    return response

def requests_multipart():
    url = 'http://httpbin.org/post'
    files = {'file': open(file_path, 'rb')}  # requests.txt中包含一句“Hey requests”
    response = requests.post(url, files=files)
    return response


if __name__ == "__main__":
    response1 = requests_form()
    response2 = requests_json()
    response3 = requests_multipart()
    
    print("From形式提交POST请求：")
    print(response1.text)
    print("Json形式提交POST请求：")
    print(response2.text)
    print("Multipart形式提交POST请求：")
    print(response3.text)