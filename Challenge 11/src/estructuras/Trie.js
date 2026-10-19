// Código de la clase 11.
function Node(value) {
  this.value = value
  this.isEndOfWord = false
  this.children = {}
  this.producto = null
}

class Trie {
  constructor() {
    this.root = new Node(null)
  }

  insert(word, producto) {
    let current = this.root

    for (let character of word) {
      if (current.children[character] === undefined) {
        current.children[character] = new Node(character)
      }

      current = current.children[character]
    }
    current.isEndOfWord = true
    current.producto = producto
  }

  search(word) {
    let current = this.root
    for (let character of word) {
      if (current.children[character] === undefined) {
        return false
      }
      current = current.children[character]
    }
    return current.isEndOfWord
  }

  searchPrefix(prefix) {
    let current = this.root

    for (let character of prefix) {
      if (current.children[character] === undefined) {
        return []
      }
      current = current.children[character]
    }

    const productos = []
    this.recolectar(current, productos)
    return productos
  }

  recolectar(nodo, productos) {
    if (nodo.isEndOfWord) {
      productos.push(nodo.producto)
    }
    for (let letra in nodo.children) {
      this.recolectar(nodo.children[letra], productos)
    }
  }
}

export default Trie
