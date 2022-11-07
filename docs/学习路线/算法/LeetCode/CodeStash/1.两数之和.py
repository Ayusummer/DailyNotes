'''
Author: your name
Date: 2021-02-27 18:13:45
LastEditTime: 2021-02-27 19:34:39
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \DailyNotes\社区相关\LeetCode\1.两数之和.py
'''
#
# @lc app=leetcode.cn id=1 lang=python3
# 只需要遍历一遍即可得到结果,假设每个数组中的数据都会说话
# 那么,第一个访问到的数据就会说"我的搭档答案应该是***"
# 之后每个访问到的数据先看看自己在不在前人的搭档答案里,如果在的话直接输出
# 不在的话就再声明自己的搭档答案
# [1] 两数之和
#

# @lc code=start
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = {}
        for i in range(len(nums)):
            if nums[i] in dic.keys():
                return i, dic[nums[i]]
            else:
                dic[target-nums[i]] = i


# @lc code=end
