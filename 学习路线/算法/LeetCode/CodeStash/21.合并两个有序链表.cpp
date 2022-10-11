/*
 * @lc app=leetcode.cn id=21 lang=cpp
 *
 * [21] 合并两个有序链表
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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode head = ListNode();
        ListNode* list3 = &head;
        while(list1 && list2){
            if(list1->val < list2->val){
                list3->next = list1;
                list1 = list1->next;
            }else{
                list3->next = list2;
                list2 = list2->next;
            }
            list3 = list3->next;
        }
        if(list1){
            list3->next = list1;
        }
        else if(list2){
            list3->next = list2;
        }
        return head.next;
    }
};
// @lc code=end

