#
# @lc app=leetcode.cn id=1646 lang=python3
#
# [1646] 获取生成数组中的最大值
#

# @lc code=start
class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n < 2:
            return n
        nums = [0] * (n+1)
        nums[0], nums[1] = 0, 1
        for i in range(2, n+1):
            if i % 2 == 0:
                nums[i] = nums[i//2]
            else:
                nums[i] = nums[i//2] + nums[i//2+1]
        return max(nums)
# @lc code=end

