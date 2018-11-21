class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  
  add(data) {
    var newNode = new Node(data);
    if (this.last !== null) {
      this.last.next = newNode;
    }
    this.last = newNode;
    if (this.first === null) {
      this.first = this.last;
    }
  }
  
  remove() {
    if (this.first === null) return console.error(new Error('Queue is empty'));
    var data = this.first.data;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null
    }
    return data;
  }
  
  peek() {
    if (this.first === null) return console.error(new Error('Queue is empty'));
    return this.first.data
  }
  
  isEmpty() {
    return (this.first === null);
  }
}

module.exports = Queue;