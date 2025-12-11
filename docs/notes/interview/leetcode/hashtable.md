---
title: 哈希表
createTime: 2025/03/12 16:56:11
permalink: /notes/leetcode/hashtable/
---
## 题目与题解

### [1. 两数之和](https://leetcode.cn/problems/two-sum/)
**难度**：<Badge type="info" text="简单" />

**标签**：<Badge type="tip" text="哈希表" /> <Badge type="tip" text="数组" /> 

**题目描述**:   
给定一个整数数组`nums`和一个整数目标值`target`，请你在该数组中找出`和为目标值target`的`那两个整数`，并返回它们的`数组下标`。  
你可以假设每种输入只会对应`一个答案`，并且你不能使用两次`相同的元素`。  
你可以按`任意顺序`返回答案。
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mp;
        for (int i = 0; i < nums.size(); ++i) {
            if (mp.count(target-nums[i])) {
                return {mp[target-nums[i]], i};
            }
            mp[nums[i]] = i;
        }
        return {};
    }
};
```