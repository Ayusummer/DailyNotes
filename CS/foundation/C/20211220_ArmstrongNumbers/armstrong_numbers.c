//
// Created by 233 on 2021/12/20.
//
#include "armstrong_numbers.h"
#include <stdio.h>
#include <math.h>

bool is_armstrong_number(int candidate){
    int sum = 0;    // 定义一个变量 sum，用于存储累加和
    int digits = 0, copy = candidate;   // digits 为位数，copy 为 candidate 复制值
    // 计算 candidate 位数
    while(copy){
        digits++;
        copy /= 10;
    }

    copy = candidate;
    
    // 计算累加和
    while(copy){
        sum += pow(copy % 10, digits);
        copy /= 10; 
    }

    if(sum == candidate)
        return true;
    else
        return false;
}