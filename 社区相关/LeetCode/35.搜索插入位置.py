#
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] 搜索插入位置
#

# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            p = left + ((right - left) >> 1)
            if nums[p] < target:
                left = p + 1
            else:
                right = p - 1
        return left
# @lc code=end

