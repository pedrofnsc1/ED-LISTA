class Node {
  constructor(newData) {
    this.data = newData;
    this.previous = null;
    this.next = null;
  }
};

export default class doubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(newData) {
    let newNode = new Node(newData);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      newNode.previous = null;
      newNode.next = null;
    } else {
      newNode.previous = null;
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  };

  append(newData) {
    let newNode = new Node(newData);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      newNode.previous = null;
      newNode.next = null;
    } else {
      newNode.next = null;
      newNode.previous = this.tail;
      this.tail.previous = newNode;
      this.tail = newNode;
    }
  };

  addAt(position, newData) {
    if (position >= this.length()) {
      this.append(newData);
    } else {
      if (position <= 0) {
        this.add(newData);
      } else {
        let newNode = new Node(newData);
        let implement = 1;

        let myHead = this.head;
        let nextHead = this.head.next;

        while (implement != position) {
          myHead = nextHead;
          nextHead = nextHead.next;
          i++;
        }
        myHead.next = newNode;
        newNode.next = nextHead;
        newNode.previous = myHead;
        nextHead.previous = newNode;
      }
    }
  }

  remove(data) {
    if (!this.isEmpty()) {
      let currentNode = this.head;
      let nextNode = this.head.next;
      let lastNode = this.headtail;
      let aux;

      if (currentNode.data === data) {
        return this.removeFirst();
      } else if (lastNode.data === data) {
        return this.removeLast();
      } else {
        while (nextNode != null) {
          if (nextNode.data === data) {
            aux = nextNode.next;
            currentNode.next = nextNode.next;
            aux.previous = currentNode;
            return true;
          }
          currentNode = nextNode;
          nextNode = nextNode.next;
        }
      }
    }
  }

  removeFirst() {
    if (!this.isEmpty()) {
      if (this.length() === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let node = this.head;
        this.head = node.next;
        this.head.previous = null;
      }
    } else {
      return false;
    }
  }

  removeLast() {
    if (!this.isEmpty()) {
      if (this.length() === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let node = this.tail;
        this.tail = node.previous;
        this.tail.next = null;
      }
    } else {
      return false;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  length() {
    let counter = 0;
    let tmp = this.head;

    while (tmp != null) {
      tmp = tmp.next;
      counter++;
    }
    return counter;
  }

  search(data) {
    if (this.isEmpty()) {
      return false;
    } else {
      let tmp = this.head;
      while (tmp !== null) {
        if (tmp.data == data) {
          return true;
        }
        tmp = tmp.next;
      }
      return false;
    }
  }

  asArray() {
    let myHead = this.head;
    let data = [];

    while (myHead != null) {
      data.push(myHead.data);
      myHead = myHead.next;
    }
    return data;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  toString() {
    let tmp = this.head;
    let text = '';

    while (tmp != null) {
      text += tmp.data + (tmp.next ? '->' : '');
      tmp = tmp.next;
    }
    return text;
  }
};