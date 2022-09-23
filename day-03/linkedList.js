

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
    
  remove(value) {
    if (!this.next) return this.value;
    if (this.next.value === value) {
      this.next = this.next.next;
    } else {
      this.next.remove(value);
    }
  }
    
  //TIME COMPLEXITY - O(1) or O(n) - If removing element from beginning of the list or end of the list, runtime will be O(1). If removing element from beginning, runtime will be O(n)
}
  


module.exports = { LinkedListNode };
