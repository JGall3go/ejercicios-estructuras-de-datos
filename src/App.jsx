import { useState } from 'react'
import { Graph } from 'react-d3-graph'
import grafo from './datos'

grafo.printGraph()
console.log('Personas en Cali:', grafo.personasDeCiudad('Cali'))

function convertirParaD3() {
  const nodes = grafo.nodes.map((nodo) => {
    if (nodo.tipo === 'ciudad') {
      return { id: nodo.id, color: 'orange', symbolType: 'square', size: 500 }
    }
    return { id: nodo.id, color: 'steelblue' }
  })

  const links = []
  for (const origen in grafo.adjList) {
    for (const destino of grafo.adjList[origen]) {
      const yaEsta = links.find((l) => l.source === destino && l.target === origen)
      if (!yaEsta) {
        links.push({ source: origen, target: destino })
      }
    }
  }

  return { nodes, links }
}

const datosGrafo = convertirParaD3()

const configuracion = {
  height: 450,
  width: 700,
  nodeHighlightBehavior: true,
  node: {
    size: 300,
    fontSize: 14,
    highlightFontSize: 14,
  },
  link: {
    highlightColor: 'gray',
  },
  d3: {
    gravity: -250,
    linkLength: 100,
  },
}

const ciudades = grafo.nodes.filter((nodo) => nodo.tipo === 'ciudad')

function App() {
  const [ciudad, setCiudad] = useState(ciudades[0].id)

  const personas = grafo.personasDeCiudad(ciudad)

  return (
    <div className="contenedor">
      <h1>Challenge 10 - Grafo de amigos y ciudades</h1>
      <p>(Azul) Personas - (Amarillo) Ciudades. Las líneas entre personas son amistades.</p>

      <div className="grafo">
        <Graph id="grafo-amigos" data={datosGrafo} config={configuracion} />
      </div>

      <h2>Personas que viven en una ciudad</h2>
      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
        {ciudades.map((c) => (
          <option key={c.id} value={c.id}>{c.id}</option>
        ))}
      </select>

      <ul>
        {personas.map((persona) => (
          <li key={persona.id}>{persona.id} - {persona.edad} años</li>
        ))}
      </ul>
    </div>
  )
}

export default App
