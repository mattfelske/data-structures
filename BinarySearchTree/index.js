const Queue = require('../Queue');

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  push(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    }
    
    var currentNode = this.root;
    var newNode = new Node(val);
    while(currentNode) {
      if ( val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  
  // Breadth-First Search
  bfs() {
    var visit = (elem) => console.log(elem.value);
    var q = new Queue();
    this.root.marked = true;
    
    q.add(this.root);
    while(!q.isEmpty()) {
      var elem = q.remove();
      visit(elem);
      if (elem.left && !elem.left.marked) {
        elem.left.marked = true;
        q.add(elem.left);
      }
      if (elem.right && !elem.right.marked) {
        elem.right.marked = true;
        q.add(elem.right);
      }
    }
  }
  
  // Depth First Search
  dfs() {
    var visit = (elem) => console.log(elem.value);
    var search = (node) => {
      if (node === null) return;
      visit(node);
      node.visited = true;
      if (node.left && !node.left.visited) {
        search(node.left);
      }
      if (node.right && !node.right.visited) {
        search(node.right);
      }
    }
    
    search(this.root);
  }
}

module.exports = BinarySearchTree;