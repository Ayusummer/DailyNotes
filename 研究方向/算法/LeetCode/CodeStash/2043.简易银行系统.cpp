/*
 * @lc app=leetcode.cn id=2043 lang=cpp
 *
 * [2043] 简易银行系统
 */

// @lc code=start
class Bank {
private:
    int num_account;
    vector<long long> balance;   // 账户余额
public:
    Bank(vector<long long>& balance) {
        num_account = balance.size();
        // balance 赋值
        this->balance = balance;
    }
    
    bool transfer(int account1, int account2, long long money) {
        // 判断账户是否存在
        if (account1 > num_account || account2 > num_account) {
            return false;
        }
        // 判断账户余额是否足够
        if (balance[account1-1] < money) {
            return false;
        }
        // 转账
        balance[account1-1] -= money;
        balance[account2-1] += money;
        return true;
    }
    
    bool deposit(int account, long long money) {
        // 判断账户是否存在
        if (account > num_account) {
            return false;
        }
        // 存款
        balance[account-1] += money;
        return true;
    }
    
    bool withdraw(int account, long long money) {
        // 判断账户是否存在
        if (account > num_account) {
            return false;
        }
        // 判断账户余额是否足够
        if (balance[account-1] < money) {
            return false;
        }
        // 取款
        balance[account-1] -= money;
        return true;
    }
};

/**
 * Your Bank object will be instantiated and called as such:
 * Bank* obj = new Bank(balance);
 * bool param_1 = obj->transfer(account1,account2,money);
 * bool param_2 = obj->deposit(account,money);
 * bool param_3 = obj->withdraw(account,money);
 */
// @lc code=end

