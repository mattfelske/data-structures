'use strict';

const Node = require('./Node');

class LinkedList {
  constructor(options) {
    this.root = null;
    
    if (options) {
      this.doubly = options.doubly || false;
      this.runner = options.runner || false;
    }
  }
  
  get isDoubly() {
    return this.doubly;
  }
  
  get isRunner() {
    return this.runner;
  }
  
  append(data) {
    var endNode = new Node(data);
    if (this.root === null) {
      return this.root = endNode;
    }
    
    var n = this.root;
    while(n.next !== null) {
      n = n.next;
    }
    n.next = endNode;
    
    if (this.runner) n.prev.jump = endNode
    if (this.doubly) endNode.prev = n;
  }
  
  remove(data) {
    if (!data) return console.error('Unable to remove node, missing data parameter');
    if (!this.root) return console.log('Root node has not been set');
    
    if (this.root.data === data) {
      this.root = this.root.next;
    }
    
    var iterator = this.root;
    while(iterator.next !== null) {
      if (iterator.next.data === data) {
        iterator.next = iterator.next.next;
        if (this.runner) iterator.prev.jump = iterator.next
        if (this.doubly) iterator.next.prev = iterator;
        
        return true;
      }
      iterator = iterator.next;
    }
    return false
  }
  
  print() {
    var str = '';
    if (this.root === null) return console.log(str);
    str += this.root.data;
    
    var symbol = (this.doubly) ? '<=>' : '->';
    var iterator = this.root;
    while(iterator.next !== null) {
      str += ` ${symbol} ${iterator.next.data}`;
      iterator = iterator.next;
    }
    return console.log(str)
  }
}

module.exports = LinkedList;

