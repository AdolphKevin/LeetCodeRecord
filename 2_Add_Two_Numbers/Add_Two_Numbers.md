**Medium**

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.  
您将获得两个非空链表，表示两个非负整数。数字以相反的顺序存储，每个节点包含一个数字。添加两个数字并将其作为链接列表返回。

You may assume the two numbers do not contain any leading zero, except the number 0 itself.  
您可以假设这两个数字不包含任何前导零，除了数字0本身。

**Example:**
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

**解题思路**

暴力解法：
将链表L1与L2反转
遍历反转后的链表，将链表每个节点以字符串的形式拼接得到S1与S2
再将S1与S2转换为整数值相加得到结果Number
将Number转换成字符串，从结尾遍历每一个字符，并将每一个字符添加到链表的每一个节点中
