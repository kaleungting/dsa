class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  search(target, root = this.root) {
    if (!root) return false;

    if (target < root.val) {
      return this.search(target, root.left);
    } else if (target > root.val) {
      return this.search(target, root.right);
    } else {
      return true;
    }
  }

  BFS() {
    let queue = [this.root];
    let visited = [];

    while (queue.length) {
      let ele = queue.shift();
      visited.push(ele.val);
      if (ele.left) queue.push(ele.left);
      if (ele.right) queue.push(ele.right);
    }
    return visited;
  }

  DFSPreorder() {
    let visited = [];
    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
  DFSPostorder() {
    let visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }
  DFSInorder() {
    let visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}
let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(1);
tree.insert(7);
tree.insert(16);
// console.log(tree);
console.log(tree.DFSPostorder());
// function inOrderPrint(root) {
//   if (!root) return;

//   inOrderPrint(root.left);
//   console.log(root.val);
//   inOrderPrint(root.right);
// }

// console.log(tree.search(7)); // => true
// console.log(tree.search(16)); // => true
// console.log(tree.search(14));
