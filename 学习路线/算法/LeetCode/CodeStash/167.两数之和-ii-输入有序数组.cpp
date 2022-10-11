/*
 * @lc app=leetcode.cn id=167 lang=cpp
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0, right = numbers.size() - 1;
        vector<int> res;
        while(1){
            if(numbers[left] + numbers[right] < target){
                left++;
            }
            else{
                while(left<right){
                    if(numbers[left] + numbers[right] == target){
                        res.push_back(left+1);
                        res.push_back(right+1);
                        return res;
                    }
                    else if(numbers[left] + numbers[right] > target){
                        right--;
                    }
                    else{
                        left++;
                        break;
                    }
                }
            }  
        }
    }
};
// @lc code=end

