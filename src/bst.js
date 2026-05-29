class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = null;
    this.#buildTree(array);
  }

  #buildTree(array) {
    const sortedUniqueArr = [...new Set(array)].sort();
    this.root = this.#buildTreeRecursive(
      sortedUniqueArr, 0, sortedUniqueArr.length
    );
  }

  #buildTreeRecursive(array, start, end) {
    if (start > end) {
      return null;
    }

    const mid = start + (end - start) / 2;
    const root = new Node(array[mid]);

    root.left = this.#buildTreeRecursive(array, start, mid-1);
    root.right = this.#buildTreeRecursive(array, mid+1, end);

    return root;
  }

  #prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.#prettyPrint(
      node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false
    );
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    this.#prettyPrint(
      node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true
    );
  }

  printTree() {
    this.#prettyPrint(this.root);
  }

  includes(value) {
    let iterNode = this.root;
    while (iterNode) {
      if (iterNode.data > value) {
        iterNode = iterNode.left;
      }
      else if (iterNode.data < value) {
        iterNode = iterNode.right;
      }
      else {
        return true;
      }
    }

    return false;
  }

  insert(value) {
    if (this.includes(value))
      return;

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let iterNode = this.root;
    while (iterNode) {
      if (iterNode.data > value) {
        if (!iterNode.left) {
          iterNode.left = new Node(value);
          return;
        }
        iterNode = iterNode.left;
      }
      else {
        if (!iterNode.right) {
          iterNode.right = new Node(value);
          return;
        }
        iterNode = iterNode.right;
      }
    }
  }

  deleteItem(value) {
    if (!this.root || !this.includes(value))
      return;

    this.#deleteItemRecursive(this.root, value);
  }

  #deleteItemRecursive(root, value) {
    if (!root)
      return root;

    if (root.data > value) {
      root.left = this.#deleteItemRecursive(root.left, value);
    }
    else if (root.data < value) {
      root.right = this.#deleteItemRecursive(root.right, value);
    }
    else {
      if (!root.left) {
        return root.right;
      }

      if (!root.right) {
        return root.left;
      }

      const successorNode = this.#getSuccessor(root);
      root.data = successorNode.data;
      root.right = this.#deleteItemRecursive(root.right, successorNode.data);
    }

    return root;
  }

  #getSuccessor(currNode) {
    currNode = currNode.right;
    while (currNode && currNode.left) {
      currNode = currNode.left;
    }

    return currNode;
  }

  // Breadth-first level order (Iterative version)
  levelOrderForEachIteration(callback) {
    if (typeof callback !== "function")
      throw new Error("A callback is required!");

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.value);

      if (node.left)
        queue.push(node.left);

      if (node.right)
        queue.push(node.right);
    }
  }

  // Breadth-first level order (Recursive version)
  levelOrderForEachRecursion(callback, queue=[this.root]) {
    if (typeof callback !== "function")
      throw new Error("A callback is required!");

    if (queue.length === 0)
      return;

    const node = queue.shift();
    callback(node.value);

    if (node.left)
      queue.push(node.left);

    if (node.right)
      queue.push(node.right);

    this.levelOrderForEachRecursion(callback, queue);
  }

  // In-order traversal (Left -> Root -> Right) (Recursion)
  inOrderForEach(callback, node) {
    if (typeof callback !== "function")
      throw new Error("A callback is required!");

    if (!node)
      return;

    this.inOrderForEach(callback, node.left);
    callback(node.value);
    this.inOrderForEach(callback, node.right);
  }

  // Pre-order traversal (Root -> Left -> Right) (Recursion)
  preOrderForEach(callback, node) {
    if (typeof callback !== "function")
      throw new Error("A callback is required!");

    if (!node)
      return;

    callback(node.value);
    this.inOrderForEach(callback, node.left);
    this.inOrderForEach(callback, node.right);
  }

  // Post-order traversal (Left -> Right -> Root) (Recursion)
  postOrderForEach(callback, node) {
    if (typeof callback !== "function")
      throw new Error("A callback is required!");

    if (!node)
      return;

    this.inOrderForEach(callback, node.left);
    this.inOrderForEach(callback, node.right);
    callback(node.value);
  }

  height(value) {
    let iterNode = this.root;
    while (iterNode) {
      if (iterNode.value > value)
        iterNode = iterNode.left;
      else if (iterNode.value < value)
        iterNode = iterNode.right;
      else
        break;
    }

    if (!iterNode)
      return undefined;

    return this.#subTreeDistToLeaf(iterNode);
  }

  #subTreeDistToLeaf(node) {
    if (!node)
      return 0;

    let maxDist = Math.max(
      this.#subTreeDistToLeaf(node.left),
      this.#subTreeDistToLeaf(node.right)
    );

    return 1 + maxDist;
  }

  depth(value) {
    let iterNode = this.root;
    let dist = 0;
    while (iterNode) {
      if (iterNode.value > value)
        iterNode = iterNode.left;
      else if (iterNode.value < value)
        iterNode = iterNode.right;
      else
        break;
      
      dist += 1;
    }

    if (!iterNode)
      return undefined;

    return dist;
  }
}


