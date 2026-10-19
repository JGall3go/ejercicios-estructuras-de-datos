import { useState } from 'react'
import Queue from './estructuras/Cola'

// Devuelve una fecha aleatoria de hoy entre las 8:00 am y las 6:00 pm
function fechaAleatoria() {
  const fecha = new Date()
  const hora = Math.floor(Math.random() * 10) + 8
  const minuto = Math.floor(Math.random() * 60)
  const segundo = Math.floor(Math.random() * 60)
  fecha.setHours(hora, minuto, segundo, 0)
  return fecha
}

// Cola del cajero con personas de prueba
const cola = new Queue()
cola.enqueue({ nombre: 'Ana Gómez', monto: 200000, llegada: fechaAleatoria() })
cola.enqueue({ nombre: 'Carlos Ruiz', monto: 50000, llegada: fechaAleatoria() })
cola.enqueue({ nombre: 'Laura Pérez', monto: 600000, llegada: fechaAleatoria() })
cola.enqueue({ nombre: 'Pedro Torres', monto: 100000, llegada: fechaAleatoria() })
cola.print()

function App() {
  // Copia de las personas de la cola para que React vuelva a pintar la pantalla
  const [personas, setPersonas] = useState(cola.items.slice())
  const [atendido, setAtendido] = useState(null)

  const [nombre, setNombre] = useState('')
  const [monto, setMonto] = useState('')

  function agregarPersona(e) {
    e.preventDefault()

    if (nombre === '' || monto === '') {
      alert('Llena todos los campos')
      return
    }

    cola.enqueue({ nombre, monto: Number(monto), llegada: fechaAleatoria() })
    cola.print()
    setPersonas(cola.items.slice())

    setNombre('')
    setMonto('')
  }

  function atenderSiguiente() {
    setAtendido(cola.dequeue())
    setPersonas(cola.items.slice())
  }

  return (
    <div className="contenedor">
      <h1>Challenge 05 - Cola del cajero</h1>

      <h2>Agregar persona</h2>
      <form onSubmit={agregarPersona}>
        <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="Monto a retirar" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
        <button type="submit">Agregar a la cola</button>
      </form>

      <h2>Cola de personas ({personas.length})</h2>
      <p>Siguiente en ser atendido: <b>{cola.isEmpty() ? 'No hay nadie en la cola' : cola.peek().nombre}</b></p>
      <button onClick={atenderSiguiente} disabled={cola.isEmpty()}>Atender siguiente</button>
      {atendido !== null && <p>Se atendió a {atendido.nombre}, que retiró ${atendido.monto.toLocaleString('es-CO')}</p>}

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Monto a retirar</th>
            <th>Llegada</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{persona.nombre}</td>
              <td>${persona.monto.toLocaleString('es-CO')}</td>
              <td>{persona.llegada.toLocaleString('es-CO')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
