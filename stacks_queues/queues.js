class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  push(val) {
    let node = new QueueNode(val);
    if (this.last !== null) {
      this.last.next = node;
    }
    this.last = node;
    if (this.first === null) {
      this.first = this.last;
    }
  }

  remove() {
    if (this.first === null) return null;

    let removed = this.first.val;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }

    return removed;
  }

  peek() {
    if (this.first === null) return null;
    return this.first.val;
  }

  isEmpty() {
    return this.first === null;
  }
}

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let queue = new Queue();
queue.push(5);
queue.push(4);
queue.push(3);
queue.push(2);
queue.push(1);
