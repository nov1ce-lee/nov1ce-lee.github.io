---
title: 图
createTime: 2025/03/16 17:34:16
permalink: /notes/leetcode/graph/
---

### [210. 课程表 II](https://leetcode.cn/problems/course-schedule-ii/)
**难度**：<Badge type="warning" text="中等" />

**标签**：<Badge type="tip" text="图" /> <Badge type="tip" text="拓扑排序" /> <Badge type="tip" text="深度优先搜索" /> <Badge type="tip" text="广度优先搜索" /> 

**题目描述**:   
现在你总共有 `numCourses` 门课需要选，记为 `0` 到 `numCourses - 1`。给你一个数组 `prerequisites` ，其中 `prerequisites[i] = [a_i, b_i]` ，表示在选修课程 `a_i` 前 必须先选修 `b_i` 。   
例如，想要学习课程 `0` ，你需要先完成课程 `1` ，我们用一个匹配来表示：`[0,1]` 。  
返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 `任意一种` 就可以了。如果不可能完成所有课程，返回 `一个空数组` 。

:::note
这道题就是一道`拓扑排序`题目，先修课程的要求就是节点存在前驱节点，那么问题就转化为是否存在一种拓扑排序，使得所有节点能够遍历一遍    
`拓扑排序`是一种用于有向无环图(DAG)的排序算法
- 要求如果存在一条从节点A到节点B的路径，那么在排序结果中A一定在B的前面
- 只有DAG才有拓扑排序，有环的图没有拓扑排序
:::
:::tabs
@tab Kahn算法步骤（BFS）
1. 找出所有入度为0的点，加入队列
2. 取出队首节点，放入结果数组
3. 删除该节点的所有出边（将相邻节点的入度减1）
4. 如果发现新的入度为0的点，加入队列
5. 重复2-4直到队列为空
6. 如果结果数组长度等于节点数，则成功；否则图中有环
```cpp
class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> table(numCourses);
        vector<int> indgree(numCourses);
        for (auto pre : prerequisites) {
            table[pre[1]].push_back(pre[0]);
            indgree[pre[0]]++;
        }
        vector<int> res;
        queue<int> q;
        for (int i = 0; i < numCourses; ++i) {
            if (indgree[i] == 0) {
                q.push(i);
            }
        }
        while (!q.empty()) {
            int cur = q.front();
            res.push_back(cur);
            q.pop();
            for (int next : table[cur]) {
                indgree[next]--;
                if (indgree[next] == 0) {
                    q.push(next);
                }
            }
        }
        for (int count : indgree) {
            if (count > 0) {
                return {};
            }
        }
        return res;
    }
};
```
:::