<!--
 * @Author: your name
 * @Date: 2021-01-22 00:35:37
 * @LastEditTime: 2021-03-15 12:16:21
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


---
# 3.14 无重复的最长字符串
- 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
- 示例 1:
  ```
  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
  ```

---
## 思路
- 滑动窗口解题
- [五分钟学算法](https://www.cxyxiaowu.com/6845.html)

---
## 自己的粪码
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        lst = []
        left = right = -1
        while right != len(s)-1:
            if s[right+1] not in lst:
                lst.append(s[right+1])
                right += 1
                ans = right-left if ans < right-left else ans 
            else:
                left += 1
                lst.pop(0)
        return ans
```
- 987/987 cases passed (184 ms)
- Your runtime beats 18.15 % of python3 submissions
- Your memory usage beats 68.32 % of python3 submissions (14.9 MB)
- 估计大部分时间都花在判断数字是否在列表里了,改进的话打算用字典

---
## 力扣加加
- 能自动生成默认值的字典

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        ans = 0
        counter = defaultdict(lambda: 0)

        for r in range(len(s)):
            while counter.get(s[r], 0) != 0:
                counter[s[l]] = counter.get(s[l], 0) - 1
                l += 1
            counter[s[r]] += 1
            ans = max(ans, r - l + 1)

        return ans
```
- 987/987 cases passed (92 ms)
- Your runtime beats 34.48 % of python3 submissions
- Your memory usage beats 49.33 % of python3 submissions (15 MB)
  ---
- ```python
  defaultdict(lambda: 0)
  ```
  - 若执行后面语句时有对不在字典值内的数据进行判断的情况,则默认生成一个索引为该值,值为0的项
  ---
- ```python
  counter.get(s[l], 0)
  ```
  取s[l]的值,若没有则返回0

# 3.15 排序链表(T148)



## 题目描述
- 给你链表的头结点 head ，请将其按 **升序** 排列并返回 **排序后的链表** 。
- 进阶：
  - 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
- **示例1**：
  - ![20210315084827](http:cdn.ayusummer233.top/img/20210315084827.png)
  ```
  输入：head = [4,2,1,3]
  输出：[1,2,3,4]
  ```
- 提示:
  - 链表中节点的数目在范围 [0, $5 * 10^4$] 内
  - ${-10}^5 <= Node.val <= {10}^5$


---
## 归并排序(递归)
- [源自@Krahets](https://leetcode-cn.com/problems/sort-list/solution/sort-list-gui-bing-pai-xu-lian-biao-by-jyd/)
- ![20210315085242](http:cdn.ayusummer233.top/img/20210315085242.png)

```python
class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next: return head # termination.
        # cut the LinkedList at the mid index.
        slow, fast = head, head.next
        while fast and fast.next:
            fast, slow = fast.next.next, slow.next
        mid, slow.next = slow.next, None # save and cut.
        # recursive for cutting.
        left, right = self.sortList(head), self.sortList(mid)
        # merge `left` and `right` linked list and return it.
        h = res = ListNode(0)
        while left and right:
            if left.val < right.val: h.next, left = left, left.next
            else: h.next, right = right, right.next
            h = h.next
        h.next = left if left else right
        return res.next
```
- 28/28 cases passed (356 ms)
- Your runtime beats 88.6 % of python3 submissions
- Your memory usage beats 53.5 % of python3 submissions (30 MB)