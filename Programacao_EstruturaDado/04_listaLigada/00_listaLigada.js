function LinkedList() {
  var Node = function (element) {
    this.element = element
    this.next = null
  }

  var length = 0
  var head = null

  this.append = function (element) {
    // adicionarno final do lista
    var node = new Node(element),
      current

    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    length++
  }

  this.insert = function (position, element) {
    // inserir novo elemento na posição especifica
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    // remove elemento na posicao especifica
    if (position > - 1 && position < length) {
      var current = head,
        previous,
        index = 0

      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function (element) {
    //remove elemento
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function (element) {
    //retorna posicao do elemento
    var current = head,
      index = 0

    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return - 1
  }

  this.isEmpty = function () {
    //retorna se funcao esta vazia ou cheia
    return length === 0
  }

  this.size = function () {
    // mostrar tamanho da lista
    return length
  }

  this.getHead = function () {
    // pega elemento que esta na cabeça
    return head
  }

  this.toString = function () {
    // convert para string 
    var current = head,
      string = ''

    while (current) {
      string += current.element + ' '
      current = current.next
    }

    return string
  }

  this.print = function () {
    // imprime no console
    console.log(this.toString())
  }
}