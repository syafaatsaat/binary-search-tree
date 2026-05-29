# Binary Search Trees

I am building a balanced BST in this project.

## Features

- Tree is built by passing an array (can be unsorted and contain duplicates)
into the constructor.
- `includes(value)` => accepts a value and returns true if the given value is in 
the tree. if the value isn’t in the tree, it should return false
- `insert(value)` => accepts a value and inserts a new node with that value into 
the tree
- `deleteItem(value)` => accepts a value and removes it from the tree
- `levelOrderForEachIteration(callback)` => accepts a callback function as its 
parameter. `levelOrderForEachIteration()` should traverse the tree in 
breadth-first level order and call the callback on each value as it traverses, 
passing each value (not the nodes) as an argument, similarly to how 
`Array.prototype.forEach()` might work for arrays. if no callback function is 
provided, throw an Error reporting that a callback is required
- `levelOrderForEachRecursion(callback)` => recursion version of 
`levelOrderForEachIteration(callback)`
- `inOrderForEach(callback)` => does in-order traversal recursively, also passes
in callback function
- `preOrderForEach(callback)` => does pre-order traversal recursively, also 
passes in callback function
- `postOrderForEach(callback)` => does post-order traversal recursively, also 
passes in callback function
- `height(value)` => returns the height of the node containing the given value. 
height is defined as the number of edges in the longest path from that node to a 
leaf node. if the value is not found in the tree, the function should return 
`undefined`
- `depth(value)` => returns the depth of the node containing the given value. 
depth is defined as the number of edges in the path from that node to the root 
node. if the value is not found in the tree, the function should return 
`undefined`
- `isBalanced()` => returns true if the tree is balanced, otherwise false
- `rebalance()` => rebalances an unbalanced tree