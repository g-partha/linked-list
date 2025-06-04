export class LinkedList {
  firstNode = null;
  append(value) {
    if (this.firstNode === null) {
      this.firstNode = new Node(value, null);
      return;
    }
    let currentNode = this.firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value, null);
  }
  prepend(value) {
    if (this.firstNode === null) {
      this.firstNode = new Node(value, null);
      return;
    }
    const secondNode = this.firstNode;
    this.firstNode = new Node(value, secondNode);
  }
  get size() {
    if (this.firstNode === null) {
      return 0;
    }
    let currentNode = this.firstNode;
    let totalNodes = 1;
    while (currentNode.nextNode) {
      totalNodes++;
      currentNode = currentNode.nextNode;
    }
    return totalNodes;
  }
  get head() {
    return this.firstNode;
  }
  get tail() {
    if (this.firstNode === null) {
      return this.firstNode;
    }
    let currentNode = this.firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    if (this.firstNode === null) {
      return `Not available at index ${index}`;
    }
    let currentNode = this.firstNode;
    let currentIndex = 0;
    if (index === 0) return this.firstNode;
    while (currentNode.nextNode) {
      currentIndex++;
      currentNode = currentNode.nextNode;
      if (index === currentIndex) return currentNode;
    }
    return `Not available at index ${index}`;
  }
  pop() {}
  contains(value) {}
  toString() {}
}
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
