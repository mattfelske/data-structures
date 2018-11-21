const LinkedList = require('./LinkedList');
const StringBuilder = require('./StringBuilder');
const HashTable = require('./HashTable');
const ArrayList = require('./ArrayList');
const Stack = require('./Stack');
const Queue = require('./Queue');
const BinarySearchTree = require('./BinarySearchTree');

console.log('***************** Data Structures *****************');
console.log('The following are sample, homebrewed datastructures that were built for testing and education purposes.');

console.log('\nGENERIC LINKED LIST')
var ll = new LinkedList();
ll.append(10);
ll.append(5);
ll.append(3);
ll.append(7);
ll.print();

console.log('Removing', 5);
ll.remove(5);
ll.print();

console.log('Removing', ll.root.data);
ll.remove(ll.root.data);
ll.print();

console.log('\nDOUBLY LINKED LIST')
var ll2 = new LinkedList({doubly: true});
ll2.append(10);
ll2.append(5);
ll2.append(3);
ll2.append(7);
ll2.print();

console.log('Removing', 5);
ll2.remove(5);
ll2.print();

console.log('Removing', ll2.root.data);
ll2.remove(ll2.root.data);
ll2.print();

// console.log('\nDOUBLY RUNNER LINKED LIST')
// var ll3 = new LinkedList({runner: true});
// ll3.append(10);
// ll3.append(5);
// ll3.append(3);
// ll3.append(7);
// ll3.print();
// 
// console.log('Removing', 5);
// ll3.remove(5);
// ll3.print();
// 
// console.log('Removing', ll3.root.data);
// ll3.remove(ll3.root.data);
// ll3.print();

console.log('\nSTRINGBUILDER')
var words = ['This', 'sentence', 'is', 'testing', 'StringBuilder'];
var strBuilder = new StringBuilder();
for (var i = 0; i < words.length; i++) {
  strBuilder.append(words[i])
}
console.log('words =', words)
console.log(strBuilder.toString());

console.log('\nHASH TABLES')
let m = new HashTable()
m.set('x', 1)
m.set('y', 2)

console.time('test #1')
m.get('unknown')
console.timeEnd('test #1')

m = new HashTable()
for (let i = 0; i < 1000000; i++) {
  m.set(`entry{i}`, i)
}

console.time('test #2')
m.get('unknown')
console.timeEnd('test #2')


console.log('\nARRAYLIST');
var arrList = new ArrayList(10);
for (let i = 0; i < 30; i++) {
  arrList.add(i);
  console.log(`Count: ${arrList.count}`, `Length: ${arrList.length}`);
}

console.log('\nSTACK');
var myStack = new Stack(10);
for (let i = 0; i < 10; i++) {
  myStack.push(i);
}
for (let i = 0; i < 10; i++) {
  console.log(myStack.pop())
}

console.log('\nQueue');
var myQueue = new Queue(10);
for (let i = 0; i < 10; i++) {
  myQueue.add(i);
}
for (let i = 0; i < 10; i++) {
  console.log(myQueue.remove())
}

console.log('\nBINARY SEARCH TREE');
var bTree = new BinarySearchTree();
bTree.push(3);
bTree.push(2);
bTree.push(4);
bTree.push(1);
bTree.push(5);
bTree.push(1);
// console.log(bTree.root)
console.log('\nBreadth First Search');
bTree.bfs();

console.log('\nDepth First Search');
bTree.dfs();

console.log('\nIn-Order Traversal');
bTree.inOrderTraversal();

console.log('\nPre-Order Traversal');
bTree.preOrderTraversal();

console.log('\nPost-Order Traversal');
bTree.postOrderTraversal();

process.exit(0);
