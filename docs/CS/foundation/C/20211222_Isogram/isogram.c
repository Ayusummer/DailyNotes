#include "isogram.h"
#include <stddef.h>

bool is_isogram(const char phrase[]){
    // 若 phrase 为 NULL 则返回 false
    if (phrase == NULL) {
        return false;
    }
    // 定义一个长度为 26, 初值为 0 的整形数组用于当做字母的 hash 表
    int hash[26] = {0};
    // 遍历 phrase 中的每个字符, 将 a~z 映射到 0~25 之间的整数作为 hash 表的索引
    for (int i = 0; phrase[i] != '\0'; i++) {
        // 定义一个字符 ch 来接收 phrase[i]
        char ch = phrase[i];
        // 如果 ch 不是 a~z
        if (ch < 'a' || ch > 'z') {
            // 若 ch 是 A~Z, 则将 ch 转换为小写字母, 否则跳过
            if(ch >= 'A' && ch <= 'Z') {
                ch = ch - 'A' + 'a';
            } else {
                continue;
            }
        }
        // 如果 hash 表中的值为 0, 说明这个字母还没有出现过, 则将 hash 表中的值设置为 1
        if (hash[ch - 'a'] == 0) {
            hash[ch - 'a'] = 1;
        } else {
            // 否则说明这个字母已经出现过了, 则返回 false
            return false;
        }
    }
    return true;
}