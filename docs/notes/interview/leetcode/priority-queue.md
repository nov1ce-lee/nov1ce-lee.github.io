---
title: 优先队列(堆)
createTime: 2025/03/13 19:33:45
permalink: /notes/leetcode/priority-queue/
---
## 介绍
优先队列是一种特殊的队列，这是一种抽象的数据结构，定义为`具有优先级排序`的队列      
实际上，`堆`经常用于实现优先队列，`大顶堆`相当于元素按`从大到小`的顺序出队的优先队列，而`小顶堆`就相当于元素按`从小到大`的顺序出队的优先队列。
```cpp
#include <queue>

// 大顶堆（默认）：优先级高的在前
priority_queue<int> maxHeap;  

// 小顶堆：优先级低的在前
priority_queue<int, vector<int>, greater<int>> minHeap;

// 基本操作
void basic_ops() {
    priority_queue<int> pq;
    pq.push(3);        // 插入元素
    pq.push(1);
    pq.push(4);
    
    cout << pq.top();  // 访问堆顶：4
    pq.pop();          // 移除堆顶
    cout << pq.size(); // 元素个数：2
}
```
### 优先队列的特点 
- 内部实现通常是堆（二叉堆）
- 插入和删除的时间复杂度是O(logn)
- 获取堆顶元素的时间复杂度是O(1)
- 不支持随机访问
- 不保证相同优先级元素的相对顺序
### 常见应用问题
-  TopK问题
- 任务调度
- 事件处理
- 最短路径算法
- 数据流中位数
- 合并K个有序序列
- 滑动窗口最大值

## 题目与题解
### [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
**难度**：<Badge type="warning" text="中等" />

**标签**：<Badge type="tip" text="优先队列（堆）" /> <Badge type="tip" text="排序" /> <Badge type="tip" text="数组" /> 

**题目描述**:   
给定整数数组`nums`和整数`k`，请返回数组中第`k`个最大的元素。
请注意，你需要找的是数组排序后的第`k`个最大的元素，而不是第`k`个不同的元素。    
你必须设计并实现时间复杂度为`O(n)`的算法解决此问题。
:::note
建立一个大根堆，做`k−1`次删除操作后，`堆顶元素`就是要找的答案
:::
```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq(nums.begin(), nums.end());
        for (int i = 0; i < k-1; ++i) {
            pq.pop();
        }
        return pq.top();
    }
};
```