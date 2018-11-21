class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  
  push(data) {
    var newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  
  pop() {
    if (this.top === null) return console.error(new Error('Nothing on stack'));
    var data = this.top.data;
    this.top = this.top.next;
    return data;
  }
  
  peek() {
    if (this.top === null)  return console.error(new Error('Nothing on stack'));
    return this.top.data
  }
  
  isEmpty() {
    return (this.top === null);
  }
}

module.exports = Stack;