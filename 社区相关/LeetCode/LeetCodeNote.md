<!--
 * @Author: your name
 * @Date: 2021-01-22 00:35:37
 * @LastEditTime: 2021-01-22 00:35:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\LeetCode\LeetCodeNote.md
-->
# 11.22 判断字母异位词
## version 1
- 用字典获取词频
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count_dict = {}
        count_dict_s = {}
        for item in t:
            count_dict[item] = count_dict[item] + 1 if item in count_dict else 1
        for item in s:
            count_dict_s[item] = count_dict_s[item] + 1 if item in count_dict_s else 1
        if count_dict.keys() != count_dict_s.keys():
            return False
        for i in count_dict.keys():
            if count_dict[i] != count_dict_s[i]:
                return False
        return True
```
- 执行用时：48 ms, 在所有 Python3 提交中击败了91.08%的用户
- 内存消耗：13.6 MB, 在所有 Python3 提交中击败了56.70%的用户

---
## version 2
- 比较排序后的字符串
```python
def isAnagram(s: str, t: str) -> bool:
    return False if sorted(s) != sorted(t) else True
```
- 执行用时：68 ms, 在所有 Python3 提交中击败了35.57%的用户
- 内存消耗：14.2 MB, 在所有 Python3 提交中击败了30.44%的用户