import { useState } from 'react'
import DoublyLinkedList from '../estructuras/ListaDoble'

// Datos falsos de páginas visitadas
const historial = new DoublyLinkedList()
historial.append('www.google.com')
historial.append('www.youtube.com')
historial.append('www.uao.edu.co')
historial.append('www.github.com')
historial.append('www.wikipedia.org')
historial.print()

function Historial() {
  const [actual, setActual] = useState(historial.head)

  function atras() {
    if (actual.prev !== null) {
      setActual(actual.prev)
    }
  }

  function adelante() {
    if (actual.next !== null) {
      setActual(actual.next)
    }
  }

  return (
    <div>
      <h2>Historial del navegador (lista doblemente enlazada)</h2>
      <p>Páginas en el historial: {historial.size()}</p>
      <h3>🌐 {actual.value}</h3>

      <button onClick={atras} disabled={actual.prev === null}>⬅ Atrás</button>
      <button onClick={adelante} disabled={actual.next === null}>Adelante ➡</button>
    </div>
  )
}

export default Historial
