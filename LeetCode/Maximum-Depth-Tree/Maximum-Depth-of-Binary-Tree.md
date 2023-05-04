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
