import { useState } from 'react'
import LinkedList from '../estructuras/ListaEnlazada'

// Datos de prueba
const canciones = new LinkedList()
canciones.append('Bohemian Rhapsody - Queen')
canciones.append('Hotel California - Eagles')
canciones.append('Imagine - John Lennon')
canciones.append('Billie Jean - Michael Jackson')
canciones.append('La Bicicleta - Carlos Vives y Shakira')
canciones.print()

function Canciones() {
  const [actual, setActual] = useState(canciones.head)
  const [numero, setNumero] = useState(1)

  function siguiente() {
    if (actual.next !== null) {
      setActual(actual.next)
      setNumero(numero + 1)
    }
  }

  function reiniciar() {
    setActual(canciones.head)
    setNumero(1)
  }

  return (
    <div>
      <h2>Reproductor de canciones (lista enlazada)</h2>
      <p>Canción {numero} de {canciones.size()}</p>
      <h3>🎵 {actual.value}</h3>

      <button onClick={siguiente} disabled={actual.next === null}>Siguiente</button>
      <button onClick={reiniciar}>Volver al inicio</button>

      {actual.next === null && <p>Se acabó la lista de reproducción.</p>}
    </div>
  )
}

export default Canciones
