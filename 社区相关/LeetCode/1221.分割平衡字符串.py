#
# @lc app=leetcode.cn id=1221 lang=python3
#
# [1221] 分割平衡字符串
#

# @lc code=start
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        ans, sp = 0, 0
        for ch in s:
            if ch == 'R':
                sp += 1
            else:
                sp -= 1
            if sp == 0:
                ans += 1
        return ans
# @lc code=end

