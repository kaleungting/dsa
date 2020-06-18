class minHeap {
  constructor() {
    this.values = [];
  }

  insert(node) {
    this.values.push(node); //add to the end of the list to keep heap property

    let idx = this.values.length - 1; //find the index of current
    let ele = this.values[idx]; //set ele to the one we'll be swapping
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //find parent idx of current
      let parent = this.values[parentIdx]; //get parent ele
      if (ele >= parent) break; //if ele is smaller than parent, no need to swap, break out of while loop
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ]; //swap parent ele with current ele
      idx = parentIdx; //reset idx to the place just swapped
    }
  }

  deleteMin() {
    if (this.values.length === 1) return this.values.pop(); //if there is only one val in heap, then just return it
    if (this.values.length === 0) return null; //if there's none to remove, just return null
    let min = this.values[0]; //
    this.siftDown(0); //start sifting from the top to the bottom
    return min;
  }

  siftDown(idx) {
    let lastIdx = this.values.length - 1;
    let lastEle = this.values[lastIdx];
  }
}

let heap = new minHeap();
heap.insert(55);
heap.insert(15);
heap.insert(25);
heap.insert(70);
heap.insert(60);
// heap.insert(12);
// heap.insert(8);
// heap.insert(29);
console.log(heap);
//add to the end of arr
//determine parent Math.floor((n-1) / 2)
//compare to parent to see if
