const RED = true;
const BLACK = false;
class Node {
  constructor(key) {
    this.data = key;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.color = RED;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
    this.TNULL = null;
  }
  rotateLeft(x) {
    let temp = x.left;
    x.left = temp.right;
    if (temp.right != this.root) {
      temp.right.parent = x;
    }
    temp.parent = x.parent;
    if (x.parent == null) {
      this.root = temp;
    } else if (x == x.parent.right) {
      x.parent.left = temp;
    } else {
      x.parent.right = temp;
    }
    temp.left = x;
    x.parent = temp;
  }
  rotateRight(x) {
    let temp = x.right;
    x.right = temp.left;
    if (temp.right != TNULL) {
      temp.left.parent = x;
    }
    temp.parent = temp.parent;
    if (x.parent == null) {
      this.root = temp;
    } else if (x == x.parent.right) {
      x.parent.right = temp;
    } else {
      x.parent.left = temp;
    }
    temp.right = x;
    x.parent = temp;
  }

  fixInsert(key) {
    while (key.parent.color == RED) {
      if (key.parent == key.parent.parent.right) {
        let uncle = key.parent.parent.left;
        if (uncle.color == RED) {
          //trade colors = father and uncle -> BLACK / grandpa -> RED
          uncle.color = BLACK;
          uncle.parent.color = BLACK;
          uncle.parent.parent.color = RED;
          key = key.parent.parent;
        } else {
          /**
           * will do after an insertion a right rotation at parent father
           * pos.newNode = pos.parentFather
           * pos.parent = newNode.parent.right
           * **/
          if (key == key.parent.left) {
            key = key.parent;
            this.rotateRight(key);
          }
          /**
           * will do left rotation after an insertion at grandpa, now father will
           * be father of the new insertion and father of parentLeft (old grandpa
           * before the rotation);
           * change colors = father -> RED to BLACK / left child -> BLACK to RED
           * right child remains RED
           */
          key.parent.color = BLACK;
          key.parent.parent.color = RED;
          this.rotateLeft(k.parent.parent);
        }
      } else {
        let uncle = key.parent.parent.right;
        if (uncle.color == RED) {
          uncle.color = BLACK;
          key.parent.color = BLACK;
          key.parent.parent.color = RED;
          key = key.parent.parent;
        } else {
          if (key == key.parent.right) {
            key = key.parent;
            this.rotateLeft(key);
          }
          key.parent.color = BLACK;
          key.parent.parent.color = RED;
          this.rotateRight(key.parent.parent);
        }
      }
      if (key == this.root) {
        break;
      }
    }
    this.root.color = BLACK;
  }

  insert(key) {
    let newNode = new Node(key);
    newNode.data = key;
    newNode.parent = null;
    newNode.left = this.TNULL;
    newNode.right = this.TNULL;
    newNode.color = RED;

    let y = null;
    let x = this.root;

    while (x != this.TNULL) {
      y = x;
      if (newNode.data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    newNode.parent = y;

    if (y == null) {
      this.root = newNode;
    } else if (newNode < y.data) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }

    if (newNode.parent == null) {
      newNode.color = BLACK;
      return;
    }
    if (newNode.parent.parent == null) {
      return;
    }

    this.fixInsert(newNode);
  }
  printTree(node, indent, last) {
    if (root != TNULL) {
      console.log(indent);
      if (last) {
        console.log("R----");
        indent += "     ";
      } else {
        console.log("L----");
        indent += "|    ";
      }

      sColor = root.color == 1 ? "RED" : "BLACK";
      console.log(root.data + "(" + sColor + ")");
      this.printTree(root.left, indent, false);
      this.printTree(root.right, indent, true);
    }
  }

  prettyPrint() {
    printHelper(this.root, "", true);
  }
}

let tree = new RedBlackTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);
tree.printTree();
