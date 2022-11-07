/*
 * @lc app=leetcode.cn id=208 lang=cpp
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {
private:
    vector<Trie*> children;
    bool isEnd;

    /*从当前节点查找 prefix, 如果不能完整的查出则返回空指针, 
        否则返回最后一个字符所在的结点地址*/ 
    Trie* searchPrefix(string prefix) {
        Trie* node = this;
        for (char ch : prefix) {
            ch -= 'a';
            if (node->children[ch] == nullptr) {
                return nullptr;
            }
            node = node->children[ch];
        }
        return node;
    }

public:
    Trie() : children(26), isEnd(false) {}

    /*从当前节点插入一个 word*/
    void insert(string word) {
        Trie* node = this;
        for (char ch : word) {
            ch -= 'a';
            if (node->children[ch] == nullptr) node->children[ch] = new Trie();
            node = node->children[ch];
        }
        node->isEnd = true;
    }

    /* 判断 word 是否在树种*/
    bool search(string word) {
        Trie* node = this->searchPrefix(word);
        return node != nullptr && node->isEnd;
    }

    /*判断树中是否有以prefix为前缀的word*/
    bool startsWith(string prefix) {
        return this->searchPrefix(prefix) != nullptr;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
// @lc code=end

