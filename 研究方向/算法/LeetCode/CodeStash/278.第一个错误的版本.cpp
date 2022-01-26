/*
 * @lc app=leetcode.cn id=278 lang=cpp
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int left=1, right=n;
        while(left<=right){
            int pivot = left + (right - left) / 2;  // 直接做加法容易溢出
            if(isBadVersion(pivot)) right = pivot - 1;
            else left = pivot + 1;
        }
        return left;
    }
};
// @lc code=end

