# -*- coding : utf-8 -*-
# @Time      : 2021/6/14 8:14
# @Author    : 咸鱼型233
# @File      : screenshot.py
# @Software  : PyCharm
# @Function  :
# @ChangeLog :
import asyncio
from pyppeteer import launch


async def main():
    browser = await launch()        # 启动浏览器
    page = await browser.newPage()  # 打开新 Tab
    await page.goto('http://example.com')           # 访问网址
    await page.screenshot({'path': 'example.png'})  # 截图
    await browser.close()           # 关闭浏览器


asyncio.run(main())
