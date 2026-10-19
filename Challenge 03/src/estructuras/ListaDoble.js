// Nodo de la lista doble: tiene un valor, un puntero al siguiente y uno al anterior
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Agrega un nodo al final de la lista
  append(value) {
    const nuevoNodo = new Node(value)

    if (this.head === null) {
      this.head = nuevoNodo
      this.tail = nuevoNodo
    } else {
      this.tail.next = nuevoNodo
      nuevoNodo.prev = this.tail
      this.tail = nuevoNodo
    }

    this.length++
  }

  // Devuelve el nodo que está en la posición index
  peek(index) {
    if (index < 0 || index >= this.length) return null

    let actual = this.head
    let contador = 0
    while (contador < index) {
      actual = actual.next
      contador++
    }
    return actual
  }

  size() {
    return this.length
  }

  // Elimina el nodo de la posición index y une el anterior con el siguiente
  remove(index) {
    const eliminado = this.peek(index)
    if (eliminado === null) return null

    if (eliminado.prev !== null) {
      eliminado.prev.next = eliminado.next
    } else {
      this.head = eliminado.next
    }

    if (eliminado.next !== null) {
      eliminado.next.prev = eliminado.prev
    } else {
      this.tail = eliminado.prev
    }

    this.length--
    return eliminado
  }

  // Muestra el contenido de la lista en la consola
  print() {
    let actual = this.head
    let texto = 'null <- '
    while (actual !== null) {
      texto += actual.value
      if (actual.next !== null) texto += ' <-> '
      actual = actual.next
    }
    console.log(texto + ' -> null')
  }
}

export default DoublyLinkedList
