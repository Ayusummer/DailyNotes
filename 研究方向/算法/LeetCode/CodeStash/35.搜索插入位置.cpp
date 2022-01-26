/*
 * @lc app=leetcode.cn id=35 lang=cpp
 *
 * [35] 搜索插入位置
 */

// @lc code=start
class Solution {
public:
  int searchInsert(vector<int> &nums, int target) {
    int pivot, left = 0, right = nums.size() - 1;
    while (left <= right) {
      pivot = left + ((right - left) >> 1);
      if (nums[pivot] < target)
        left = pivot + 1;
      else if (nums[pivot] > target)
        right = pivot - 1;
      else
        return pivot;
    }
    return left;
  }
};
// @lc code=end
