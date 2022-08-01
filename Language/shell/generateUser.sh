#!/bin/bash
# 上面一行作为开头第一行作用是指定要使用的 shell
# 此脚本用于生成一个数据文件, 包含 n 个用户名, 密码(每个用户名密码不同)
# 脚本支持两个参数, 第一个为文件名, 第二个为用户数量, 第三个为用户名前缀
generateUser(){
    # 判断文件是否存在
    if [ -f $1 ]; then
        echo "该文件已存在"
        read -p "请输入新的文件名: " newFileName
        generateUser $newFileName
    else
        # 创建文件
        touch $1
        # 生成迭代器 n
        n=$userNum
        # 创建用户
        while [ $n -gt 0 ]
        do
            echo $userPrefix$[11-$n] password$[11-$n]>> $1
            n=$[$userNum-1]
        done
    fi
}

# 获取参数
read -p "请输入文件名: " fileName
read -p "请输入用户数量: " userNum
read -p "请输入用户名前缀: " userPrefix
generateUser $fileName $userNum $userPrefix