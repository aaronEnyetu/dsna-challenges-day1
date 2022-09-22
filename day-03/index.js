/* eslint-disable no-console */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
    
  add(node) {

    if (this.value > node.value) {
      //left route
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      //right route
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}



module.exports = { BinaryTreeNode };
