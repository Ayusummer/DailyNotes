#
# @lc app=leetcode.cn id=278 lang=python3
#
# [278] 第一个错误的版本
#

# @lc code=start
# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        left, right = 1, n
        while left <= right:
            pivot = left + (right - left) // 2
            if isBadVersion(pivot):
                if isBadVersion(pivot - 1) == False:
                    return pivot
                else:
                    right = pivot - 1
            if isBadVersion(pivot) == False:
                left = pivot + 1
        
        
# @lc code=end

