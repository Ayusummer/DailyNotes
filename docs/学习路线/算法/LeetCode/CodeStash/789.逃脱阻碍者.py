#
# @lc app=leetcode.cn id=789 lang=python3
# https://leetcode-cn.com/problems/escape-the-ghosts/solution/python-man-ha-dun-ju-chi-tan-xin-by-himy-pj3r/
# [789] 逃脱阻碍者
#
# 启发式: 我们到达终点需要的步数至少是 abs(targetX - 0) + abs(targetY - 0)
# 敌人可以任意移动，那么存在任意敌人在这或者这之前能到达终点，我们必然就不能走到终点
# 以上条件可以想象为我们在某些半路会被抓，那么敌人必然可以以同样时间到达终点
# 不会有傻子觉得自己走更多步数(绕路) 就可以避开敌人，因为那只是给了对方更多时间到达终点
# class Solution:
#     def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
#         def manhattanDistance(p1, p2):
#             return abs(p2[0] - p1[0]) + abs(p2[1] - p1[1])
#         m = manhattanDistance((0, 0), target)
#         return all(manhattanDistance(g, target) > m for g in ghosts)


# @lc code=start
class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        def manhattanDistance(p1, p2):
            return abs(p2[0] - p1[0]) + abs(p2[1] - p1[1])
        m = manhattanDistance((0, 0), target)
        return all(manhattanDistance(g, target) > m for g in ghosts)

# @lc code=end

