import doubleLinkedList from "./doubleLinkedList";

export default class numericalSet {
  constructor() {
    this.data = new doubleLinkedList();
  };

  add(newData) {
    if (!this.has(newData)) {
      this.data.add(newData);
    } else {
      return false;
    }
  };

  delete(data) {
    return this.data.remove(data);
  }

  has(data) {
    return this.data.search(data);
  }

  values() {
    return this.data.asArray();
  }

  union(setOfItens) {
    let res = new numericalSet();

    for (let i of this.values()) {
      res.add(i);
    }
    for (let j of setOfItens.values()) {
      res.add(j);
    }
    return result;
  }

  intersection(setOfItens) {
    let res = new numericalSet();

    for (let i of setOfItens.values()) {
      if (this.has(i)) {
        res.add(i);
      }
    }
    return res;
  }
  clear() {
    this.data.clear();
  };
  isEmpty() {
    return this.data.isEmpty();
  }
  isFull() {
    return this.data.isFull();
  }
}

