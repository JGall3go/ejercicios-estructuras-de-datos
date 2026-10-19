// Nodo de la lista enlazada: tiene un valor y un puntero al siguiente
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
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
    if (index < 0 || index >= this.length) return null

    let eliminado

    if (index === 0) {
      eliminado = this.head
      this.head = this.head.next
      if (this.length === 1) this.tail = null
    } else {
      const anterior = this.peek(index - 1)
      eliminado = anterior.next
      anterior.next = eliminado.next
      if (eliminado === this.tail) this.tail = anterior
    }

    this.length--
    return eliminado
  }

  // Muestra el contenido de la lista en la consola
  print() {
    let actual = this.head
    let texto = ''
    while (actual !== null) {
      texto += actual.value + ' -> '
      actual = actual.next
    }
    console.log(texto + 'null')
  }
}

export default LinkedList
