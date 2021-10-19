class Node {
  constructor(d) {
    this.key = d;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  //get the height of the tree
  height(n) {
    if (n === null) {
      return 0;
    }
    return n.height;
  }
  max(a, b) {
    return a > b ? a : b;
  }

  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;

    //rotate
    x.right = y;
    y.left = T2;

    //update height
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.left)) + 1;

    //new root
    return x;
  }

  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    //rotate
    y.left = x;
    x.right = T2;

    //update height
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

    //new root
    return y;
  }

  balance(n) {
    if (n === null) {
      return 0;
    }
    return this.height(n.left) - this.height(n.right);
  }

  insert(node, key) {
    if (node == null) {
      return new Node(key);
    }
    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    } else {
      return node;
    }

    //update the height of this 
    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    let balance = this.balance(node);

    //double left balance
    if (balance > 1 && key < node.left.key) {
      return this.rightRotate(node);
    }
    //double right balance
    if (balance < -1 && key > node.right.key) {
      return this.leftRotate(node);
    }

    //left right balance
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    //right left balance 
    if (balance < - 1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  preOrder(node) {
    if (node != null) {
      console.log(`[${node.key}]`);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

var tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

/* The constructed AVL Tree would be
      30
      / \
     20 40
    / \   \
   10 25  50
  */
console.log(
  "Preorder traversal of the " + "constructed AVL tree is <br>"
);
tree.preOrder(tree.root);