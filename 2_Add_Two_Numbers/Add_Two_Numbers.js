/* *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let AddTwoNumbers = (l1, l2) => {
  l1 = Reverser(l1); //反转链表
  l2 = Reverser(l2); //反转链表
  l1 = ListCoverString(l1); //连接在一起并转换成字符串
  l2 = ListCoverString(l2); //连接在一起并转换成字符串
  let sum = StringCoverIntSum(l1, l2).toString(); //将字符串转换为int型并求和，并转换成字符串
  return StringCoverList(sum);
};

/**
 * 反转链表
 * @param {ListNode} list 
 * @return {ListNode}
 */
let Reverser = list => {
  let p = list.val; //定义p为链表头节点
  let q = new ListNode(null); //定义q为null
  while (p.next !== null) { //从头节点开始，遍历链表所有节点
    q = p.next;
    p.next = q.next;
    q.next = list.val.next;
    list.val.next = q;
  }
  return list;
};

/**
 * 将链表转为字符串并先加
 * @param {ListNode} list 
 * @return {string}
 */
let ListCoverString = list => {
  let s = '';
  while (list.next !== null) {
    s += list.next.toString();
  }
  return s;
};

/**
 * 将字符串转换为int，并求和
 * @param {String} str1 
 * @param {String} str2 
 * @return {Number}
 */
let StringCoverIntSum = (str1, str2) => parseInt(str1) + parseInt(str2);

/**
 * 将字符串遍历得到链表
 * @param {String} str 
 * @return {ListNode}
 */
let StringCoverList = str => {
  //将字符串拆分成字符，得到字符数组
  let char = str.split('');
  let list = new ListNode(char[0]);
  if (char.length > 1) {
    for (let i = 1; i < char.length; i++) {
      list.next = char[i];
    }
  }
  return list;
};