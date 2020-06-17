class StackOfPlates {
  constructor() {
    this.stacks = [];
    this.max = 5;
  }

  push(val) {
    let lastStack = this.stacks[this.stacks.length - 1];
    if (lastStack.length + 1 > this.max) {
      let newStack = new Stack();
      newStack.push(val);
      this.stacks.push(newStack);
    } else {
      lastStack.push(val);
    }
  }

  pop() {
    let lastStack = this.stacks[this.stacks.length - 1];
    if (lastStack.length === 0) return null;

    let removed = lastStack.pop();
    if (lastStack.length === 0) {
      this.stacks.pop();
    }
    return removed;
  }
}
