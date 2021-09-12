#
# @lc app=leetcode.cn id=1894 lang=python3
#
# [1894] 找到需要补充粉笔的学生编号
#

# @lc code=start
class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        ans, perResume = 0, sum(chalk)
        chalk_left = k % perResume if k >= perResume else k
        while chalk_left >= chalk[ans]:
            chalk_left -= chalk[ans]
            ans += 1

        return ans
# @lc code=end

