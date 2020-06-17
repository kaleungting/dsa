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

function sortStack(unsorted) {
  let temp = new Stack(); //create a temp stack

  while (!unsorted.isEmpty()) {
    //while there is still stuff in the unsorted stack
    let ele = unsorted.pop(); //pop element
    while (!temp.isEmpty() && temp.peek() > ele) {
      //iterate through the sorted stack, and see if the element is greater than the temp element (you want it top heavy for now, since you'll be switching it back)
      unsorted.push(temp.pop()); //throw the ones that are larger into the unsorted stack
    }
    temp.push(ele); //push temp ele into sorted stack
  } //everything that was pushed onto the unsorted stack, should be sorted already, but it'll go back into loop and into sorted stack
  while (!temp.isEmpty()) {
    //stack1 should be empty now, but you want to move everything from temp stack back into the original stack
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
