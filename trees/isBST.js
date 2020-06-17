class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

//ITERATIVE
function isBSTI(treeRoot) {
  let nodeStack = [];

  nodeStack.push({
    node: treeRoot,
    lowerB: -Infinity,
    upperB: Infinity,
  });

  while (nodeStack) {
    let { node, lowerB, upperB } = nodeStack.pop();

    if (node.val <= lowerB || node.val >= upperB) {
      return false;
    }

    if (node.left) {
      nodeStack.push({
        node: node.left,
        lowerB: lowerB,
        upperB: node.val,
      });
    }

    if (node.right) {
      node.nodeStack.push({
        node: node.right,
        lowerB: node.val,
        upperB: upperB,
      });
    }
  }
  return true;
}

//RECURSIVE

function isBSTR(treeNode, lowerB, upperB) {
  lowerB = lowerB !== undefined ? lowerB : -Infinity;
  upperB = upperB !== undefined ? upperB : Infinity;

  if (!treeNode) return true;

  if (treeNode.val <= lowerB || treeNode.val >= upperB) {
    return false;
  }
  return (
    isBSTR(treeNode.left, lowerB, treeNode.val) &&
    isBSTR(treeNode.right, treeNode.val, upperB)
  );
}
