#
# @lc app=leetcode.cn id=704 lang=python3
#
# [704] 二分查找
#

# @lc code=start
from typing import List
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if nums[0] > target or nums[-1] < target:
            return -1
        if nums[0] == target:
            return 0

        left, right = 0, len(nums) - 1
        ans = right
        while nums[ans] != target and left < right - 1:
            if nums[ans] > target:
                right = ans
                ans = (left + right) // 2
            else:
                left = ans
                ans = (left + right) // 2
        return ans if nums[ans] == target else -1
# @lc code=end
