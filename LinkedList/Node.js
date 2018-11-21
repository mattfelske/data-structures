'use strict';

class Node {
  
  constructor(data, next, prev, jump) {
    this.next = next || null;
    this.prev = prev || null; // doubly linked list
    this.jump = jump || null; // runner support linked list. +2
    this.data = data;
  }
}

module.exports = Node;
