class minStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack === null || x <= this.minStack.pop()) {
      this.minStack.push(x);
    }
  }

  pop() {
    let removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return removed;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]; //O(1)
  }
}
