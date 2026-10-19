import Trie from './Trie'
import MinHeap from './MinHeap'

class Buscador {
  constructor() {
    this.trie = new Trie()
  }

  insert(name, popularity) {
    this.trie.insert(name, { name, popularity })
  }

  searchTopK(prefix, k) {
    const productos = this.trie.searchPrefix(prefix)

    const heap = new MinHeap()
    for (const producto of productos) {
      heap.push(producto)
      if (heap.size() > k) {
        heap.pop()
      }
    }

    const resultado = []
    while (heap.size() > 0) {
      resultado.unshift(heap.pop())
    }
    return resultado
  }
}

export default Buscador
