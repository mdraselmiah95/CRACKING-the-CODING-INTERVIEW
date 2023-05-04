// Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root) => {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const maxDepth1 = (root) => {
  let maxDepth = 0;
  let search = (node, level) => {
    if (node === null) return;
    if (level > maxDepth) maxDepth = level;
    search(node.left, level + 1);
    search(node.right, level + 1);
  };
  search(root, 1);
  return maxDepth1;
};
