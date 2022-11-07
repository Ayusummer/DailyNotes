/*
 * @lc app=leetcode.cn id=2022 lang=cpp
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        // 判断是否可以转变成二维数组
        if (original.size() != m * n) {
            return {};
        }
        // 初始化二维数组
        vector<vector<int>> result(m, vector<int>(n));
        // 将一维数组转变成二维数组
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result[i][j] = original[i * n + j];
            }
        }
        return result;
    }
};
// @lc code=end

