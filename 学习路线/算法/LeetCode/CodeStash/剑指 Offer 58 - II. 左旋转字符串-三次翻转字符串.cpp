// 优化了个寂寞, 性能和直接用 reverse 差不多甚至还低
#include<iostream>
using namespace std;

void re(string& str, int front, int num) {
    char tmp;
    for (int i = 0; i < num/2; i++) {
        tmp = str[i+front];
        str[i+front] = str[front+num-1-i];
        str[front + num - 1 - i] = tmp;
    }
}

class Solution {
public:
    string reverseLeftWords(string s, int n) {
        if (s == "")  return "";
        int s_len = s.size();
        if (n < 1 || n >= s_len)  return s;
        re(s, 0, s_len);
        re(s, 0, s_len - n);
        re(s, s_len - n, n);
        return s;
    }
};

int main() {
    Solution solution = Solution();
    string s = "abcdefg";
    int k = 2;
    //re(s, 2, 2);
    //cout << endl<<s<<endl;
    cout << solution.reverseLeftWords(s, k) << endl;
    return 0;
}
