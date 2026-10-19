
class Graph {
  constructor() {
    this.nodes = []
    this.adjList = {}
  }

  addNode(node) {
    this.nodes.push(node)
    this.adjList[node.id] = []
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2)
    this.adjList[node2].push(node1)
  }

  searchNode(id) {
    if (!this.nodes.length) return
    return this.nodes.find(n => n.id == id)
  }

  printAdjacency(id) {
    if (this.searchNode(id)) {
      console.log(this.adjList[id])
    }
  }

  printGraph() {
    console.log(this.adjList)
  }

  personasDeCiudad(ciudad) {
    const personas = []
    for (const id of this.adjList[ciudad]) {
      const nodo = this.searchNode(id)
      if (nodo.tipo === 'persona') {
        personas.push(nodo)
      }
    }
    return personas
  }
}

export default Graph
