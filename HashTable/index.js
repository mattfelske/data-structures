let hash = require('string-hash');

class HashTable {
  constructor() {
    this.list = [];
  }
  
  get(x) {
    return this.list[hash(x)];
  }
  
  set(x, y) {
    this.list[hash(x)] = y;
    // TODO Add linked list support to account for collisions on X
    
  }
}

module.exports = HashTable