'use strict';

class StringBuilder {
  constructor() {
    this.buffer = [];
  }
  
  append(str) {
    if (!str) return console.error(new Error('Missing parameter str'));
    if (typeof str !== 'string') return console.error(new Error(`Unable to append ${typeof str}`));
    this.buffer.push(str);
  }
  
  toString() {
    let output = '';
    for (var i = 0; i < this.buffer.length; i++) {
      output = output + this.buffer[i] + ' ';
    }
    return output.trim();
  }
}

module.exports = StringBuilder;