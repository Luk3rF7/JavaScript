function Node(data) {
  return {
    data,
    left: null,
    right: null,
    show,
  };

  function show() {
    return data;
  }
}

function BST() {
  let root = null;
  return {
    insert,
    remove,
    findMin,
    findMax,
    find,
    getBST,
    inOrder,
    preOrder,
    postOrder,
  };

  function insert(value) {
    const newNode = Node(value);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }
  function remove(value) {
    root = removeNode(root, value);
  }
  function findMin() {
    return findMinValue(root);
  }
  function findMax() {
    return findMaxValue(root);
  }

  function find(value) {
    let current = root;

    while (current.data !== value) {
      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }

    return current;
  }

  function getBST() {
    return root;
  }
  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      console.log(node.show());
      inOrder(node.right);
    }
  }

  function preOrder(node) {
    if (node !== null) {
      console.log(node.show());
      preOrder(node.left);
      preOrder(node.right);
    }
  }
  function postOrder(node) {
    if (node !== null) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show());
    }
  }
}

function insertNode(node, newNode) {
  // Se for menor
  if (newNode.data < node.data) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      // Se tiver alguém ocupando o filho esquerdo
      insertNode(node.left, newNode);
    }

    // Se for maior
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      // Se tiver alguém ocupando o filho direita
      insertNode(node.right, newNode);
    }
  }
}

function findMinValue(node) {
  // condição de parada
  if (node.left === null) {
    return node;
  }

  return findMinValue(node.left);
}

function findMaxValue(node) {
  // condição de parada
  if (node.right === null) {
    return node;
  }

  return findMaxValue(node.right);
}

function removeNode(node, value) {
  if (node === null) {
    return null;
  }

  if (node.data === value) {
    // nó folha
    if (node.left === null && node.right === null) {
      return null;
    }

    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

    const tmpNode = findMinValue(node.right);

    node.data = tmpNode.data;
    node.right = removeNode(node.right, tmpNode.data);

    return node;
    // Se não encontrou ainda o valor que quero remover
  } else if (value < node.data) {
    // Se o valor que quero remover é menor que o meu nó corrente
    node.left = removeNode(node.left, value);
    return node;
  } else {
    // Se o valor que quero remover é maior que o meu nó corrente
    node.right = removeNode(node.right, value);
    return node;
  }
}

const nums = BST();
nums.insert(17);
nums.insert(21);
nums.insert(9);
nums.insert(5);
nums.insert(32);
nums.insert(15);
nums.insert(20);
nums.insert(88);
nums.insert(10);
nums.insert(68);
nums.insert(90);

//console.log(nums.getBST());

//nums.postOrder( nums.getBST() )
//console.log(nums.findMin());
//console.log(nums.findMax());

nums.remove(21);
console.log(nums.getBST());
