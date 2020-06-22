// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newTail = new Node(val);
    if (!this.head) {
      this.head = newTail;
    } else {
      this.tail.next = newTail;
    }
    this.tail = newTail;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let current = this.head;

    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currIdx = 0;
    let current = this.head;

    while (currIdx !== index) {
      current = current.next;
      currIdx++;
    }
    return current;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return this.addToTail(val);
    if (index === 0) return this.addToHead(val);

    const newNode = new Node(val);
    const foundNode = this.get(index - 1);
    const temp = foundNode.next;
    foundNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.removeHead();
    if (index === this.length) return this.removeTail();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    let temp = removed.next;
    prevNode.next = temp;
    this.length--;
    return removed;
  }

  // TODO: Implement the size method here
  size() {
    let current = this.head;
    let length = 0;
    while (current) {
      current = current.next;
      length++;
    }
    return length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;