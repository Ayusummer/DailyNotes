'''
Author: your name
Date: 2021-03-06 21:12:36
LastEditTime: 2021-03-13 19:50:55
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \DailyNotes\社区相关\LeetCode\2.两数相加.py
'''
#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] 两数相加
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

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

                    
     
# @lc code=end

