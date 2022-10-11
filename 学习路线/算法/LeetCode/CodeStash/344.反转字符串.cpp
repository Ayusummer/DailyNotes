/*
 * @lc app=leetcode.cn id=344 lang=cpp
 *
 * [344] 反转字符串
 */

// @lc code=start
class Solution {
public:
    void reverseString(vector<char>& s) {
        int len = s.size(), left=0, right = len-1;
        while(left < right){
            swap(s[left], s[right]);
            left++;
            right--;
        }
    }
};
// @lc code=end

