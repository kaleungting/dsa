class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(val) {
    this.inStack.push(val);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        let ele = this.inStack.pop();
        this.outStack.push(ele);
      }
      if (this.outStack.length === 0) return null;
    }
    return this.outStack.pop();
  }
}
