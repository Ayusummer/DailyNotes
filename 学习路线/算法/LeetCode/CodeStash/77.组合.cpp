/*
 * @lc app=leetcode.cn id=77 lang=cpp
 *
 * [77] 组合
 */

// @lc code=start
class Solution {
public:
    vector<int> temp;
    vector<vector<int>> ans;

    // 深度优先搜索
    void dfs(int cur, int n, int k){
        // 剪枝: 若果当前 temp 长度 + [cur, n] 长度 < k，则不需要继续搜索
        if(temp.size() + (n - cur + 1) < k) return;
        // 录入合规的结果
        if(temp.size() == k){
            ans.push_back(temp);
            return;
        }
        // 选择当前位置
        temp.push_back(cur);
        dfs(cur + 1, n, k);
        temp.pop_back();

        // 不选择当前位置
        dfs(cur + 1, n, k);
    }

    vector<vector<int>> combine(int n, int k) {
        dfs(1, n, k);
        return ans;
    }
};
// @lc code=end

