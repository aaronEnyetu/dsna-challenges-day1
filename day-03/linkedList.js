

// ------------------------------ 2 - LINKED LIST (ADD, GETLIST, REMOVE) -----------------

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
  add(node) {
    if (!this.next) this.next = node;
    else {
      this.next.add(node);
    }
  }
  
}

module.exports = { LinkedListNode };
