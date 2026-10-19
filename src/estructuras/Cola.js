// Cola (FIFO): el primero que entra es el primero que sale
class Queue {
  constructor() {
    this.items = []
  }

  // Agrega la persona y ordena la cola por la fecha de llegada
  enqueue(item) {
    this.items.push(item)
    this.items.sort((a, b) => a.llegada - b.llegada)
  }

  dequeue() {
    return this.items.length > 0 ? this.items.shift() : null
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }

  print() {
    this.items.forEach(item => {
      console.log(item)
    })
  }
}

export default Queue
