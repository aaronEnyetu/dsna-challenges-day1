
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
