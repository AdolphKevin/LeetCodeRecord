**Easy**

Given an array of integers, return indices of the two numbers such that they add up to a specific target.  
给定一个整数数组，返回两个数字的索引，使它们相加到特定目标  

You may assume that each input would have exactly one solution, and you may not use the same element twice.  
您可以假设每个输入只有一个解决方案，并且您可能不会两次使用相同的元素。  

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

解题思路：

暴力解：
取出数组中的一个值，与数组中其它的数依次相加，判断是否等于目标值

