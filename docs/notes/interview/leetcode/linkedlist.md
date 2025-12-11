---
title: 链表
createTime: 2025/03/05 11:24:01
permalink: /notes/leetcode/linkedlist/
---
## 简介
链表是一种用于存储数据的数据结构，通过`如链条一般的指针`来连接元素。  
它的特点是`插入`与`删除`数据十分`方便`，但`寻找与读取数据`的表现`欠佳`。
:::tabs
@tab 单向链表
```c++
struct node {
    int val;
    node *next;
};
```
@tab 双向链表
```c++
struct node {
    int val;
    node *prev;
    node *next;
};
```
:::

## 题目与题解
### [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)
**难度**：<Badge type="info" text="简单" />

**标签**：<Badge type="tip" text="链表" /> <Badge type="tip" text="双指针" /> <Badge type="tip" text="哈希表" /> 

**题目描述**:   
给你一个链表的头节点`head`，判断链表中是否有环。    
细节描述：如果链表中有某个节点，可以通过连续跟踪`next`指针再次到达，则链表中存在环。
如果链表中存在环 ，则返回`true`。否则，返回`false`。

:::note 题解
经典算法`Floyd判圈算法`(又称`龟兔赛跑算法`):     
- 假想`乌龟`和`兔子`在链表上移动，`兔子`跑得快，`乌龟`跑得慢。当`乌龟`和`兔子`从链表上的同一个节点开始移动时，如果该链表中没有环，那么`兔子`将一直处于`乌龟`的前方并最终到达终点(链表结尾)；  
如果该链表中有环，那么`兔子`会先于`乌龟`进入环，并且一直在环内移动。等到`乌龟`进入环时，由于`兔子`的速度快，它一定会在`乌龟`走了一圈之前与`乌龟`相遇，即套了`乌龟`若干圈。

对于这道题目来说，就可以使用`快慢指针`的方式，慢指针每次移动`一步`，快指针每次移动`两步`。  
初始时快慢指针都在`head`节点，`slow`和`fast`指针执行移动的循环，直到`slow`和`fast`指针再次相遇，此时即可证明链表存在环，否则链表无环。
:::
:::code-tabs
@tab c++
```c++
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (!head || !head->next) {
            return false;
        }
        ListNode *slow, *fast;
        slow = fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
};
```
:::

### [142. 环形链表II](https://leetcode.cn/problems/linked-list-cycle/)
**难度**：<Badge type="waring" text="中等" />

**标签**：<Badge type="tip" text="链表" /> <Badge type="tip" text="双指针" /> <Badge type="tip" text="哈希表" /> 

**题目描述**:   
给定一个链表的头节点`head`，返回链表开始入环的第一个节点。如果链表无环，则返回`null`。  <Badge type="warning" text="不允许修改链表" /> 

:::note 题解
和上一道题目一样，继续使用`快慢指针`的方式，慢指针每次移动`一步`，快指针每次移动`两步`。  
初始时快慢指针都在`head`节点，`slow`和`fast`指针执行移动的循环，直到`slow`和`fast`指针再次相遇。
假设从`head`节点走到`in`入环节点需要移动`a`步，`slow`和`fast`指针在节点`meet`处相遇，此时`slow`节点又移动`b`步，节点`fast`在环内移动 **n * (b + c) + b** 步，共移动 **a + n * (b + c) + b** 步，节点`slow`共移动 **a + b** 步。而`fast`走的步数又是`slow`的两倍，因此有
$$
\begin{aligned}
a + n \left( b + c \right) + b = 2 \left( a + b \right) \\
\Rightarrow \
&a = n \left( b + c \right) - b = \left( n - 1 \right) \left( b + c \right) + c \\
\end{aligned}
$$
那么，如果此时`slow`和`fast`指针分别从`head`和`meet`节点开始走，当两个指针再次相遇时，`slow`刚好走了`a`步，`fast`绕着环走了(n-1)圈又走了c的步数，此时相遇在`in`节点，即可返回该节点。

:::
:::code-tabs
@tab c++
```c++
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (!head || !head->next) {
            return nullptr;
        }
        ListNode *slow, *fast;
        slow = fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) {
                    slow = slow->next;
                    fast = fast->next;
                }
                return slow;
            }
        }
        return nullptr;
    }
};
```
:::

### [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)
**难度**：<Badge type="waring" text="中等" />

**标签**：<Badge type="tip" text="双向链表" /> <Badge type="tip" text="哈希表" /> <Badge type="tip" text="设计" /> 

**题目描述**:   
请你设计并实现一个满足`LRU(最近最少使用)`缓存约束的数据结构。
实现 LRUCache 类：
- LRUCache(int capacity) 以`正整数`作为容量`capacity`初始化`LRU`缓存
- int get(int key) 如果关键字`key`存在于缓存中，则返回关键字的值，否则返回`-1`。
- void put(int key, int value) 如果关键字`key`已经存在，则变更其数据值`value`；如果不存在，则向缓存中插入该组`key-value`。如果插入操作导致关键字数量超过`capacity`，则应该`逐出`最久未使用的关键字。
函数`get`和`put`必须以`O(1)`的平均时间复杂度运行。
:::note
在双向链表的实现中，使用一个`伪头部(dummy head)`和`伪尾部(dummy tail)`标记界限，这样在添加节点和删除节点的时候就不需要检查相邻的节点是否存在。
:::
```cpp
struct node {
    int key, value;
    node *prev, *next;
    node() : key(0), value(0), prev(nullptr), next(nullptr) {}
    node(int _key, int _value) : key(_key), value(_value), prev(nullptr), next(nullptr) {}
};

class LRUCache {
private:
    unordered_map<int, node*> cache;
    node *head, *tail;
    int size;
    int capacity;

public:
    LRUCache(int _capacity) : capacity(_capacity), size(0){
        head = new node();
        tail = new node();
        head->next = tail;
        tail->prev = head;
    }
    
    int get(int key) {
        if (!cache.count(key)) {
            return -1;
        }
        node* cur = cache[key];
        moveToHead(cur);
        return cur->value;
    }
    
    void put(int key, int value) {
        if (!cache.count(key)) {
            node* cur = new node(key, value);
            cache[key] = cur;
            insertNode(head, cur);
            ++size;
            if (size > capacity) {
                node* remo = tail->prev;
                deleteTail();
                cache.erase(remo->key);
                delete remo;
                --size;
            }
        }
        else {
            node* cur = cache[key];
            cur->value = value;
            moveToHead(cur);
        }

    }

    void deleteNode(node* cur) {
        cur->prev->next = cur->next;
        cur->next->prev = cur->prev;
    }
    void insertNode(node* pre, node* cur) {
        cur->next = pre->next;
        pre->next->prev = cur;
        pre->next = cur;
        cur->prev = pre;
    }
    void moveToHead(node* cur) {
        deleteNode(cur);
        insertNode(head, cur);
    }
    void deleteTail() {
        node *cur = tail->prev;
        deleteNode(cur);
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
```

### [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)
**难度**：<Badge type="info" text="简单" />

**标签**：<Badge type="tip" text="链表" /> <Badge type="tip" text="递归" />

**题目描述**:   
给你单链表的头节点`head`，请你`反转链表`，并返回反转后的链表。
:::tabs
@tab 迭代法
> 依次将当前节点的指针指向前一个节点即可  
> 由于节点没有引用前一个`节点`，需要`存储`前一个节点来进行连接
```cpp
class Solution {
public:
    ListNode* pre = nullptr;
    ListNode* reverseList(ListNode* head) {
        while (head) {
            ListNode* nex = head->next;
            head->next = pre;
            pre = head;
            head = nex;
        }
        return pre;
    }
};
```
@tab 递归法
> 假设`节点 i`之后的其余部分链表已经被反转，那么只需要将`节点 i`的下一个节点指向` i `即可   
> 需要注意的是需要将当前节点指向`空`
```cpp
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head || !head->next) {
            return head;
        }
        ListNode* newHead = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return newHead;
    }
};
```
:::
