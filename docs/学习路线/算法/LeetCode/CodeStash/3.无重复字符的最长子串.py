'''
Author: your name
Date: 2021-03-14 12:01:35
LastEditTime: 2021-03-14 21:11:39
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \DailyNotes\社区相关\LeetCode\3.无重复字符的最长子串.py
'''
#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start
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

# @lc code=end

