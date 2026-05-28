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
}


