#
# @lc app=leetcode.cn id=295 lang=python3
#
# [295] 数据流的中位数
#

# @lc code=start
from sortedcontainers import SortedList

class MedianFinder:

    def __init__(self):
        self.nums = SortedList()
    
    def addNum(self, num: int) -> None:
        self.nums.add(num)


    def findMedian(self) -> float:
        nums_ = self.nums
        n  = len(nums_)
        return  nums_[n//2]  if n & 1 \
            else (nums_[n//2] + nums_[n//2-1]) / 2





# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
# @lc code=end

