/*
 * Algoritmo Linked List
 */

function Node(element) {
  return {
    element,
    next: null,
  };
}

function LList() {
  const head = Node("head");
  /* head
    {
      element: 'head',
      next: null
    }
  */
  return {
    find,
    insert,
    remove,
    toString,
  };

  function find(valueAfter) {
    let currentNode = head;
    while (currentNode.element !== valueAfter) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function insert(value, after) {
    const newNode = Node(value);
    const current = find(after);
    newNode.next = current.next;
    current.next = newNode;
  }
  function remove() {}
  function toString() {
    let currentNode = head;
    while (currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }
}

function fn1() {
  return "fn1";
}

function fn2() {
  return "fn2";
}

function fn3() {
  return "fn3";
}

const linkedList = LList();
linkedList.insert(fn1, "head");
linkedList.insert(fn2, fn1);
linkedList.insert(fn3, fn2);

linkedList.toString();
