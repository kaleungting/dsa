var isUnivalTree = function (root) {
  let vals = new Set();

  function traversal(node) {
    if (!node) return;
    vals.add(node.val);
    traversal(node.left);
    traversal(node.right);
  }

  traversal(root);

  return vals.size === 1;
};
