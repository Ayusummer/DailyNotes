#
# @lc app=leetcode.cn id=881 lang=python3
#
# [881] 救生艇
#

# @lc code=start
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        ans, front, back = 0, 0, len(people) - 1

        while front <= back:
            if people[front] + people[back] <= limit:
                front += 1
            ans += 1
            back -= 1

        return ans
# @lc code=end

