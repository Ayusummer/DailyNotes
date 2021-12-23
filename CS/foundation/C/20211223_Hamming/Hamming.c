//
// Created by 233 on 2021/12/23.
//
#include "Hamming.h"
#include "string.h"

int compute(const char *lhs, const char *rhs){
    // 获取两字符串长度
    int len_l, len_r;
    len_l = strlen(lhs);
    len_r = strlen(rhs);
    // 比较字符串长度, 不同则返回 -1
    if(len_l != len_r)
        return -1;
    // 若两字符串长度相同则遍历两字符串找出不相同的字符数
    int count = 0;  // 初始化不同字符数
    for (int i = 0; i < len_l; i++) {
        if (lhs[i] != rhs[i]) {
            count++;
        }
    }
    return count;
}