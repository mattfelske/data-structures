const Queue = require('../Queue');

class Node {
  constructor(val, adjacent) {
    this.value = val;
    this.adjacent = adjacent || [];
  }
  
  attach(node) {
    var found = this.adjacent.find((elem) => elem.value === node.value);
    if (found) return;
    this.adjacent.push(node);
  }
  
  toString() {
    let str = `${this.value}:`
    for (var i = 0; i < this.adjacent.length; i++) {
      str += ` ${this.adjacent[i].value}`
    }
    return str;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
  
  push(val, adjacent) {
    if (val === null || val === undefined) return;
    if (adjacent && !Array.isArray(adjacent)) return;
    
    var newNode = new Node(val, adjacent);
    this.nodes.push(newNode);
    return newNode;
  }
  
  print() {
    for (var i = 0; i < this.nodes.length; i++) {
      console.log(`${this.nodes[i].toString()}`);
    }
  }
  
  dfs() {
    if (this.nodes.length === 0) return;
    
    var visit = (elem) => console.log(`${elem.value}`);
    var search = (node) => {
      if (!node) return;
      visit(node);
      node.visited = true;
      node.adjacent.forEach((elem) => {
        if (!elem.visited) search(elem)
      })
    };
    
    search(this.nodes[0]);
  }
  
  bfs() {
    if (this.nodes.length === 0) return;
    
    var visit = (elem) =>  console.log(`${elem.value}`);
    var search = (node) => {
      var q = new Queue();
      node.marked = true;
      q.add(node);
      while(!q.isEmpty()) {
        var elem = q.remove();
        visit(elem);
        elem.adjacent.forEach((elem) => {
          if (!elem.marked) {
            elem.marked = true;
            q.add(elem);
          }
        });
      }
    };
    
    search(this.nodes[0])
  }
}

module.exports = Graph;