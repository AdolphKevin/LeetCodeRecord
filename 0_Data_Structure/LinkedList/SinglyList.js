//单链表的实现

function Node(date) {
  this.data = date;
  this.next = null;
}

function SinglyList() {
  this.length = 0;
  this.head = null;
}

SinglyList.prototype.add = function (value) {
  let node = new Node(value);
  
}