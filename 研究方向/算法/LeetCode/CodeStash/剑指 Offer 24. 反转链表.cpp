#include<vector>
#include<iostream>
using namespace std;


struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
    void showValue() {
        ListNode* node = this;
        while (node) {
            cout << node->val << "->";
            node = node->next;
        }
        cout << "NULL" << endl;
    }
};



class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* currNode = head;
        ListNode* nodeStash = nullptr;
        while (currNode) {
            ListNode* nextNode = currNode->next;
            currNode->next = nodeStash;
            nodeStash = currNode;
            currNode = nextNode;
        }
        return nodeStash;
    }
};


int main() {
    Solution solution = Solution();
    ListNode node1(1);
    ListNode node2(2);
    ListNode node3(3);
    ListNode node4(4);
    ListNode node5(5);
    node1.next = &node2;
    node2.next = &node3;
    node3.next = &node4;
    node4.next = &node5;
    node1.showValue();
    ListNode* nodeRe = solution.reverseList(&node1);
    nodeRe->showValue();
    return 0;
}
