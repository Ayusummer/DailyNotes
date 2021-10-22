#include<iostream>
using namespace std;
#include<vector>

class Solution {
public:
    string replaceSpace(string s) {
        int space_count = 0;
        int len_origin = s.length();
        for (char& ch : s) {
            if (ch == ' ')  space_count++;
        }
        s.resize(len_origin + 2 * space_count);
        // µ¹Ðò±éÀúÐÞ¸Ä
        for (int i = len_origin - 1, j = s.length() - 1; i < j; i--, j--) {
            if (s[i] == ' ') {
                s[j--] = '0';
                s[j--] = '2';
                s[j] = '%';
            }
            else  s[j] = s[i];
        }
        return s;
    }
};

int main() {
    string s = "We are happy.";
    Solution solution = Solution();
    cout << solution.replaceSpace(s) << endl;
	return 0;
}