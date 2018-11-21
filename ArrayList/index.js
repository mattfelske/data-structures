
class ArrayList {
  constructor(size) {
    if (typeof size !== 'number') return console.error(new Error('Invalid size of array list. Must be number'));
    if (size <= 0) return console.error(new Error('Size must be a positive integer'));
    
    this.length = size;
    this.count = 0;
    this.arr = new Array(size);
  }
  
  add(entry) {
    this.arr[this.count] = entry
    this.count++;
    if (this.count === this.length) {
      this.length = this.length *2;
      this.arr = new Array(this.length);
    }
  }
}


module.exports = ArrayList;