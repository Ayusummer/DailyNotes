/*
 * @lc app=leetcode.cn id=19 lang=cpp
 *
 * [19] 删除链表的倒数第 N 个结点
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *dummy = new ListNode(0, head);
        // 新建两个指针指向 head
        ListNode *p1 = dummy, *p2 = head;
        // 先移动 p2 n 步
        for (int i = 0; i < n; i++) {
            p2 = p2->next;
        }
        // 遍历链表，直到 p2 指向最后一个结点
        while (p2) {
            p1 = p1->next;
            p2 = p2->next;
        }
        // 此时 p1 即为链表的倒数第 n+1 个结点, 删除它后面一个结点
        p1->next = p1->next->next;
        ListNode *ans = dummy->next;
        delete dummy;
        return ans;
    }
};
// @lc code=end

