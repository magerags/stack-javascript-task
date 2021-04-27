// Your implementation goes here
class Stack {
  constructor(...elements) {
    this.elements = elements;
  }

  get size() {
    return this.elements.length;
  }

  push(element) {
    return this.elements.push(element);
  }

  pop() {
    if (this.size == 0) return null;
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.size - 1];
  }

  swap() {
    const a = this.elements;
    return [a[this.size - 2], a[this.size - 1]] = [a[this.size - 1],a[this.size - 2]];
  }

  isEmpty() {
    return this.elements.length == 0;
  }
}

module.exports = Stack;
