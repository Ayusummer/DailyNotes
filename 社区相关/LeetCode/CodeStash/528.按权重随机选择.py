#
# @lc app=leetcode.cn id=528 lang=python3
#
# [528] 按权重随机选择
#

# @lc code=start
from itertools import accumulate
from bisect import bisect_left
from random import randint

class Solution:

    def __init__(self, w):
        self.pre = list(accumulate(w))
        self.total = sum(w)

    def pickIndex(self) -> int:
        x = randint(1, self.total)
        return bisect_left(self.pre, x)



# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
# @lc code=end

