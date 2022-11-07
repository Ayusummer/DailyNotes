/*
 * @lc app=leetcode.cn id=977 lang=cpp
 *
 * [977] 有序数组的平方
 */

// @lc code=start
class Solution {
public:
  vector<int> sortedSquares(vector<int> &nums) {
    int i = 0;
    vector<int> ans;
    while (nums[i] < 0 && i < nums.size() - 1) {
      nums[i] = -nums[i];
      i++;
    }
    // 纯纯负数数组
    if (i == nums.size()) {
      while (i) {
        i--;
        ans.push_back(nums[i] * nums[i]);
      }
      return ans;
    }
    // nums 中有非负数
    int j = i-1, k = i;
    while(!(j==-1 && k==nums.size())){
      if(j==-1){
        ans.push_back(nums[k]*nums[k]);
        k++;
      }else if(k==nums.size()){
        ans.push_back(nums[j]*nums[j]);
        j--;
      }else{
        if(nums[j]<=nums[k]){
          ans.push_back(nums[j]*nums[j]);
          j--;
        }else{
          ans.push_back(nums[k]*nums[k]);
          k++;
        }
      }
    }
    return ans;
  }
};
// @lc code=end
