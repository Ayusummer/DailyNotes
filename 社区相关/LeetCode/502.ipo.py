#
# @lc app=leetcode.cn id=502 lang=python3
#
# [502] IPO
#

# @lc code=start
class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        if w >= max(capital):
            return w + sum(nlargest(k, profits))

        n = len(profits)
        curr = 0
        arr = [(capital[i], profits[i]) for i in range(n)]
        arr.sort(key = lambda x : x[0])
        
        pq = []
        for _ in range(k):
            while curr < n and arr[curr][0] <= w:
                heappush(pq, -arr[curr][1])
                curr += 1

            if pq:
                w -= heappop(pq)
            else:
                break
        
        return w

# @lc code=end

