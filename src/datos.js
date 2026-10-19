import Graph from './estructuras/Grafo'

const grafo = new Graph()

// Ciudades: solo tienen nombre
function agregarCiudad(nombre) {
  grafo.addNode({ id: nombre, tipo: 'ciudad' })
}

// Personas: tienen nombre y edad, y quedan unidas a su ciudad
function agregarPersona(nombre, edad, ciudad) {
  grafo.addNode({ id: nombre, tipo: 'persona', edad: edad })
  grafo.addEdge(nombre, ciudad)
}

agregarCiudad('Cali')
agregarCiudad('Bogotá')
agregarCiudad('Medellín')

agregarPersona('Juan', 20, 'Cali')
agregarPersona('Laura', 22, 'Cali')
agregarPersona('Andrés', 25, 'Cali')
agregarPersona('Camila', 19, 'Bogotá')
agregarPersona('Felipe', 30, 'Bogotá')
agregarPersona('Sofía', 27, 'Medellín')
agregarPersona('Mateo', 21, 'Medellín')

// Amistades entre personas
grafo.addEdge('Juan', 'Laura')
grafo.addEdge('Juan', 'Camila')
grafo.addEdge('Laura', 'Sofía')
grafo.addEdge('Andrés', 'Felipe')
grafo.addEdge('Felipe', 'Mateo')
grafo.addEdge('Camila', 'Sofía')

export default grafo
