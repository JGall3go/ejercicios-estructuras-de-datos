
class Nodo {
  constructor(valor) {
    this.valor = valor
    this.hijos = []
  }

  agregarHijo(nodo) {
    this.hijos.push(nodo)
  }
}


function dfs(nodo) {
  console.log(nodo.valor.titulo)
  for (let hijo of nodo.hijos) {
    dfs(hijo)
  }
}


function bfs(raiz) {
  const cola = [raiz]
  while (cola.length > 0) {
    const actual = cola.shift()
    console.log(actual.valor.titulo)
    cola.push(...actual.hijos)
  }
}

export { Nodo, dfs, bfs }
