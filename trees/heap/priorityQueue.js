class priorityQueue {
  constructor() {
    this.queue = [];
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChild(idx) {
    return [idx * 2 + 1];
  }
  getRightChild(idx) {
    return [idx * 2 + 2];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.queue.push(node);
    let idx = this.queue.length - 1;

    while (idx > 0) {
      let parentIdx = this.getParent(idx);
      let parent = this.queue[parentIdx];
      if (node.priority >= parent.priority) break;

      [this.queue[parentIdx], this.queue[idx]] = [
        this.queue[idx],
        this.queue[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  dequeue() {
    if (this.queue.length === 1) return this.queue.pop();
    if (this.queue.length === 0) return null;
    let min = this.queue[0];
    this.queue[0] = this.queue.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    const length = this.queue.length;

    // compare to see if left child is smaller
    if (
      left <= length &&
      this.queue[left] &&
      this.queue[left].priority < this.queue[smallest].priority
    ) {
      smallest = left;
    }
    // compare to the new smallest, if it's smaller then replace
    if (
      right <= length &&
      this.queue[right] &&
      this.queue[right].priority < this.queue[smallest].priority
    ) {
      smallest = right;
    }
    // swap
    if (smallest !== index) {
      [this.queue[smallest], this.queue[index]] = [
        this.queue[index],
        this.queue[smallest],
      ];
      this.sinkDown(smallest);
    }
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let p = new priorityQueue();

p.enqueue("concussion", 3);
p.enqueue("head explosion", 0);
p.enqueue("headache", 4);
p.enqueue("broken arm", 2);
p.enqueue("twisted neck", 1);

console.log(p);

p.dequeue();
console.log(p);
