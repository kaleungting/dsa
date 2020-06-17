class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.top === null) return null;
    let removed = this.top.val;
    this.top = this.top.next;
    return removed;
  }

  push(val) {
    let add = new StackNode(val);
    add.next = this.top;
    this.top = add;
  }

  peek() {
    if (this.top === null) return null;
    return this.top.val;
  }

  isEmpty() {
    return this.top === null;
  }

  print() {
    let str = "";
    while (this.top) {
      if (this.top.next) {
        str += `${this.top.val} => `;
      } else {
        str += this.top.val;
      }
      this.top = this.top.next;
    }
    return str;
  }
}

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


let stack = new Stack();
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(0);
