#
# @lc app=leetcode.cn id=678 lang=python3
#
# [678] 有效的括号字符串
#

# @lc code=start
class Solution:
    def checkValidString(self, s: str) -> bool:
        maxCount, minCount = 0, 0
        for ch in s:
            if ch == '(':
                maxCount += 1
                minCount += 1
            elif ch == ')':
                maxCount -= 1
                if maxCount < 0:
                    return False
                minCount = 0 if minCount - 1 < 0 else minCount - 1
            else:
                maxCount += 1
                minCount = 0 if minCount - 1 < 0 else minCount - 1
        return minCount == 0
# @lc code=end

