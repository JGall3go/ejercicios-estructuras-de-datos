
class Nodo {
  constructor(valor) {
    this.valor = valor
    this.izquierda = null
    this.derecha = null
  }

  isLeaf() {
    if (this.izquierda === null && this.derecha === null) {
      return true
    } else {
      return false
    }
  }
}

class ArbolBinario {
  constructor() {
    this.raiz = null
  }

  // Si el valor es menor va a la izquierda, si no va a la derecha
  insertar(valor) {
    const nuevoNodo = new Nodo(valor)
    if (!this.raiz) {
      this.raiz = nuevoNodo
      return
    }

    let actual = this.raiz
    while (true) {
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo
          return
        }
        actual = actual.izquierda
      } else {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo
          return
        }
        actual = actual.derecha
      }
    }
  }

  // N - I - D
  preorden(nodo) {
    if (!nodo) return
    console.log(nodo.valor)
    this.preorden(nodo.izquierda)
    this.preorden(nodo.derecha)
  }

  // I - N - D
  inorden(nodo) {
    if (!nodo) return
    this.inorden(nodo.izquierda)
    console.log(nodo.valor)
    this.inorden(nodo.derecha)
  }

  // I - D - N
  postorden(nodo) {
    if (!nodo) return
    this.postorden(nodo.izquierda)
    this.postorden(nodo.derecha)
    console.log(nodo.valor)
  }

  // Busca un valor en el árbol. Devuelve true si lo encuentra
  buscar(valor) {
    let actual = this.raiz
    while (actual !== null) {
      if (valor === actual.valor) {
        return true
      }
      if (valor < actual.valor) {
        actual = actual.izquierda
      } else {
        actual = actual.derecha
      }
    }
    return false
  }
}

export default ArbolBinario
