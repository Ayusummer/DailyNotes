/*
 * @lc app=leetcode.cn id=876 lang=cpp
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        // 遍历链表求长度
        ListNode* i = head;
        int length = 0;
        while (i != nullptr) {
            length++;
            i = i->next;
        }
        // 计算遍历到中间结点需要的步数
        int step = length / 2;
        // 遍历到中间结点
        i = head;
        while (step--) {
            i = i->next;
        }
        return i;
    }
};
// @lc code=end

