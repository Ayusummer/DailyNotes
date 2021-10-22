#include<iostream>
using namespace std;

class Solution {
public:
    string reverseLeftWords(string s, int n) {
        string ans = s;
        ans.resize(n);
        char& p = s[n];
        s = &p + ans;
        return s;
    }
};

int main() {
    Solution solution = Solution();
    string s = "abcdefg";
    int k = 2;
    cout << solution.reverseLeftWords(s, k) << endl;
    return 0;
}
