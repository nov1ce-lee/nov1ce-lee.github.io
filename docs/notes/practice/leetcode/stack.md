---
title: 栈
createTime: 2025/03/14 11:45:44
permalink: /notes/practice/leetcode/stack/
---

## 题目与题解
### [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)
**难度**：<Badge type="info" text="简单" />

**标签**：<Badge type="tip" text="栈" /> <Badge type="tip" text="字符串" /> 

**题目描述**:   
给定一个只包括 ` ( ) { } [ ] ` 的字符串 `s` ，判断字符串是否有效。  

有效字符串需满足：  
- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。
- 每个右括号都有一个对应的相同类型的左括号。
:::note
使用`栈`来存储出现过的`左括号`，每当出现`右括号`时检查栈内是否存在`匹配`的左括号，若匹配则弹出并继续流程，否则就是不匹配，即`括号对`不符合要求。
:::
```cpp
class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            switch(c) {
                case '(':
                case '[':
                case '{':
                    st.push(c);
                    break;
                case ')':
                    if (!st.empty() && st.top() == '(') {
                        st.pop();
                        break;
                    }
                    else {
                        return false;
                    }
                case ']':
                    if (!st.empty() && st.top() == '[') {
                        st.pop();
                        break;
                    }
                    else {
                        return false;
                    }
                case '}':
                    if (!st.empty() && st.top() == '{') {
                        st.pop();
                        break;
                    }
                    else {
                        return false;
                    }
            }
        }
        return st.empty();
    }
};
```