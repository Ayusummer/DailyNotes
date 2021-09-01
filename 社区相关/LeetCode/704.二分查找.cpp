/*
 * @lc app=leetcode.cn id=704 lang=cpp
 *
 * [704] 二分查找
 */

// @lc code=start
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int pivot, left = 0, right = nums.size() - 1;
        while(left <= right){
            pivot = (left + right) / 2;
            if(nums[pivot]<target) left = pivot + 1;
            else if(nums[pivot] > target) right = pivot -1;
            else return pivot; 
        }
        return -1;
    }
};
// @lc code=end

