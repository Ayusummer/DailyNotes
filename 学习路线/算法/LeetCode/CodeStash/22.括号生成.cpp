/*
 * @lc app=leetcode.cn id=22 lang=cpp
 *
 * [22] 括号生成
 */

// @lc code=start
class Solution {
public:
    vector<string> res= vector<string>(); // 存储结果
    string s = "";   // 存储每次生成的括号字符串
    
    // dfs
    void dfs(string cur_str, int left,int right){
        if(left == 0 && right == 0){
            res.push_back(cur_str);
            return;
        }
        if(right<left) return;
        if(left>0) dfs(cur_str+"(", left-1, right);
        if(right>0) dfs(cur_str+")", left, right-1);
    }

    vector<string> generateParenthesis(int n) {
        dfs(s, n, n);
        return res;
    }
};

// @lc code=end

