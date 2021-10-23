#include<iostream>
using namespace std;
#include<cmath>
#include<vector>

/* 判断一个数是否为素数
*   是则返回 true 否则返回 false
*/
bool isPrime(int n) {
    if (n < 2)  return false;
    for (int i = 2; i < sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}

///* 判断一个素数是否为超级素数
//* 是则返回 true 否则返回 false
//* primeLst 为素数表 primeLst[a] = 1 说明 a 为素数
//*/
//bool isSuperPrime(int prime, vector<int> primeLst) {
//    for (int i = 10; i < prime; i = i * 10) 
//        if (primeLst[prime % i] == 0)
//            return false;
//    return true;
//}

/* 通过 k-1 位的超级素数构造 k 为超级素数
*/
vector<int> superPrimeLstCreate(vector<int> SPLst, int k) {
    vector<int> ans;
    for (int i = 0; i < SPLst.size(); i++) {
        for (int j = 1; j < 10; j++) {
            int primeCreate = j * pow(10, k-1) + SPLst[i];
            if (isPrime(primeCreate))
                ans.push_back(primeCreate);
        }
    }
    return ans;
}

// 寻找并返回 k 位超级素数列表
vector<int> findKSuperPrimeLst(int k) {
/* 2 是素数, 但是再前面加上任意数字后形成的数字是偶数不是素数
   5 是素数, 但是再前面加上任意数字后形成的数字能被 5 整除故不是素数
   因此满足超级素数的话其个位必是 3 或 7
   要生成超级素数只要以 3, 7 为底, 向高位加数字然后判断其是否为素数即可
*/
    vector<int> SPLst = {3, 7};
    for (int i = 0; i < k-1; i++) {
        SPLst = superPrimeLstCreate(SPLst, i + 2);
    }
    return SPLst;
}


int main() {
    // 生成 5 位超级素数列表
    vector<int> a = findKSuperPrimeLst(5);
    for (int i = 0; i < a.size(); i++) {
        cout << a[i] << endl;
    }
    return 0;
}
