---
title: 排序
createTime: 2025/03/13 15:52:29
permalink: /notes/practice/leetcode/sort/
---

## 排序介绍

### 快速排序
时间复杂度为O(nlog n)，空间复杂度为O(log n)     
快速排序算法思路：
- 选择基准值`pivot`
- 将数组分为`小于`基准值和`大于`基准值的两部分
- `递归`地调用快排算法处理两个子数组    

[演示页面](http://algorithm.novishare.site)
```cpp
class Solution {
private:
    void quickSort(vector<int>& nums, int left, int right) {
        if (left >= right) return;
        
        // 选择基准值并partition
        int pivot = partition(nums, left, right);
        
        // 递归处理左右两部分
        quickSort(nums, left, pivot - 1);
        quickSort(nums, pivot + 1, right);
    }
    
    int partition(vector<int>& nums, int left, int right) {
        // 选择最右边的元素作为基准值
        int pivot = nums[right];
        int i = left - 1;
        
        // 将小于基准值的元素移到左边
        // i左(含i)表示小于基准值的元素索引
        // j表示当前遍历的元素索引
        for (int j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                i++;
                swap(nums[i], nums[j]);
            }
        }
        
        // 将基准值放到正确的位置
        swap(nums[i + 1], nums[right]);
        return i + 1;
    }

public:
    vector<int> sortArray(vector<int>& nums) {
        quickSort(nums, 0, nums.size() - 1);
        return nums;
    }
};
```

### 归并排序
时间复杂度为O(nlog n)，空间复杂度为O(n) 
归并排序算法思路：
- 将数组从中间分为两部分，分别对两个子数组进行归并排序
- 将两个排序好的子数组合并
```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        mergeSort(nums, 0, nums.size()-1);
        return nums;
    }
    void mergeSort(vector<int>& nums, int start, int end) {
        if (start >= end) return;
        int mid = (start + end) / 2;
        mergeSort(nums, start, mid);
        mergeSort(nums, mid + 1, end);
        merge(nums, start, mid, mid+1, end);
    }
    void merge(vector<int>& nums, int start1, int end1, int start2, int end2) {
        vector<int> tmp(end2 - start1 + 1);
        int i = start1, j = start2, k = 0;
        while (i <= end1 && j <= end2) {
            if (nums[i] <= nums[j]) {
                tmp[k++] = nums[i++];
            }
            else {
                tmp[k++] = nums[j++];
            }
        }
        while (i <= end1) {
            tmp[k++] = nums[i++];
        }
        while (j <= end2) {
            tmp[k++] = nums[j++];
        }
        for (k = 0; k < tmp.size(); ++k) {
            nums[start1 + k] = tmp[k];
        }
    }
};
```

### 选择排序
时间复杂度为O(n^2)，空间复杂度为O(1)     
思路：开启一个循环，每轮从未排序区间选择最小的元素，将其放到已排序区间的末尾。当所有元素都被排序过时，排序完成
```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        selectSort(nums);
        return nums;
    }
    void selectSort(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n - 1; ++i) {
            int index = i;
            for (int j = i + 1; j < n; ++j) {
                if (nums[j] < nums[index]) {
                    index = j;
                }
            }
            swap(nums[i], nums[index]);
        }
    }
};
```