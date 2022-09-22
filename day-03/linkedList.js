

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
    
  //TIME COMPLEXITY - O(1) or O(n) - if inserting element to the beginning or end of the list, runtime will be O(1). If inserting element anywhere in the list, runtime will be O(n)

  getList() {
    if (!this.next) return this.value;
    return `${this.value} ${this.next.getList()}`;
  }
  
}

module.exports = { LinkedListNode };
