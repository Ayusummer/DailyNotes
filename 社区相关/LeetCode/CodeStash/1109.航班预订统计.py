#
# @lc app=leetcode.cn id=1109 lang=python3
#
# [1109] 航班预订统计
#

# @lc code=start
from itertools import accumulate
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        ans = [0] * n
        for i, j, seats in bookings:
            ans[i-1] += seats
            if j < n:
                ans[j] -= seats 
        ans = list(accumulate(ans))
        return ans
# @lc code=end

