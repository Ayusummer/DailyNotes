<!--
 * @Author: your name
 * @Date: 2021-01-22 00:35:37
 * @LastEditTime: 2021-03-13 19:59:10
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

---
# 3.13 两数相加
- 本题接触到了LeetCode的ListNode类
- ListNodeObject.val -> 取该结点的值
- ListNodeObject.next -> 该结点下一个结点

## 题目
- 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序 的方式存储的，并且每个节点只能存储 一位 数字。
- 请你将两个数相加，并以相同形式返回一个表示和的链表。
- 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

- 示例1
  ```
  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8] 
  解释：342 + 465 = 807.
  ```


## version1(自己写的垃圾)
```python
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        add_temp= l1.val + l2.val
        l3 = l4 = ListNode( add_temp %10)
        carry = add_temp // 10
        while(l1.next or l2.next):
            l1 = l1.next if l1.next else ListNode()
            l2 = l2.next if l2.next else ListNode()
            add_temp = l1.val + l2.val + carry
            l4.next = ListNode( add_temp % 10)
            carry = add_temp // 10
            l4 = l4.next
        if carry:
            l4.next = ListNode(1)
        return l3
```
- 1568/1568 cases passed (80 ms)
- Your runtime beats 29.08 % of python3 submissions
- Your memory usage beats 26.98 % of python3 submissions (14.9 MB)

    ---
- 生草,再执行一次又变了,不改了不改了
- 1568/1568 cases passed (68 ms)
- Your runtime beats 74.05 % of python3 submissions
- Your memory usage beats 87.85 % of python3 submissions (14.7 MB)

---
## version2(速度最快的典型代码)
```python
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0  # 表示进位
        head = curr = ListNode(0)
        while l1 or l2:
            val = carry
            if l1:
                val += l1.val
                l1 = l1.next
            if l2:
                val += l2.val
                l2 = l2.next

            curr.next = ListNode(val % 10)
            curr = curr.next
            carry = val // 10
        if carry>0:
            curr.next = ListNode(carry)


        return head.next
```

---
## 解析指路
- [五分钟学算法](https://www.cxyxiaowu.com/6843.html)