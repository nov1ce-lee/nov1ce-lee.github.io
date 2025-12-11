---
title: 滑动窗口
createTime: 2025/03/13 15:45:58
permalink: /notes/leetcode/window/
---

## 题目与题解
### [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
**难度**：<Badge type="warning" text="中等" />

**标签**：<Badge type="tip" text="滑动窗口" /> <Badge type="tip" text="字符串" /> <Badge type="tip" text="哈希表" /> 

**题目描述**:   
给定一个字符串`s`，请你找出其中`不含有重复字符`的`最长子串`的长度。
```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<char> letters(128);
        int maxLen = 0;
        int curLen = 0;
        int start = 0;
        for (int end = 0; end < s.length(); ++end) {
            letters[s[end]]++;
            while (letters[s[end]] > 1) {
                letters[s[start]]--;
                start++;
            }
            curLen = end - start + 1;
            maxLen = max(maxLen, curLen);
        }
        return maxLen;
    }
};
```