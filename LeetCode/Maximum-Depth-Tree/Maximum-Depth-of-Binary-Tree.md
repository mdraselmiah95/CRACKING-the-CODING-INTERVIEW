# Maximum Depth of Binary Tree

Given the **root** of a binary tree, return _its maximum depth._

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

```
Input: root = [1,null,2]
Output: 2
```

### Solution:

```js
const maxDepth = (root) => {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

```js
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
  let maxDepth = 0;
  let search = (node, level) => {
    if (node === null) return;
    if (level > maxDepth) maxDepth = level;
    search(node.left, level + 1);
    search(node.right, level + 1);
  };
  search(root, 1);
  return maxDepth;
};
```
