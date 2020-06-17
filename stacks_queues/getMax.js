class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class maxStack {
  constructor() {
    this.stack = new Stack();
    this.maxStack = new Stack();
  }

  push(item) {
    this.stack.push(item);
    if (this.maxStack.peek() === null || item >= this.maxStack.peek()) {
      this.maxStack.push(item);
    }
  }

  pop() {
    let item = this.stack.pop();
    if (item === this.maxStack.peep()) {
      this.maxStack.pop();
    }
    return item;
  }

  getMax() {
    return this.maxStack.peep();
  }
}

function sortStack(unsorted) {
  let temp = new Stack();

  while (!unsorted.isEmpty()) {
    let ele = unsorted.pop();
    while (!temp.isEmpty() && temp.peek() > ele) {
      unsorted.push(temp.pop());
    }
    temp.push(ele);
  }

  while (!temp.isEmpty()) {
    unsorted.push(temp.pop());
  }
  return unsorted;
}

let newStack = new Stack();
newStack.push(6);
newStack.push(1);
newStack.push(2);
newStack.push(4);
newStack.push(3);
newStack.push(5);

console.log(sortStack(newStack));
