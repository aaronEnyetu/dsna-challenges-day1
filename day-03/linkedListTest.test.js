
const { LinkedListNode } = require('./linkedList.js');

test('adding node to linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);
  expect(root.next).toBe(nodeB);
});

test('getting list in linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  expect(root.getList()).toBe('A');
  root.add(nodeB);
  expect(root.getList()).toBe('A B');
  root.add(nodeC);
  expect(root.getList()).toBe('A B C');
  root.add(nodeD);
  expect(root.getList()).toBe('A B C D');
});


test('removing from linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);
  root.remove('C');
  expect(root.getList()).toBe('A B D');
});
