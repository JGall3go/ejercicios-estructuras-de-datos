// Pila (LIFO): el último que entra es el primero que sale
class Stack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    return this.items.length > 0 ? this.items.pop() : null
  }

  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  // Imprime desde el de arriba (el último) hasta el de abajo
  print() {
    this.items.slice().reverse().forEach(item => {
      console.log(item)
    })
  }
}

export default Stack
