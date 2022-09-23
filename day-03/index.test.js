/* eslint-disable no-console */

const { BinaryTreeNode } = require('./index.js');


describe('node based data structures', () => {
  it('BinaryTreeNode', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    B.add(A);
    expect(B.left).toEqual(A);
  });
});
