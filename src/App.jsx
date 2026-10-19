import { useState } from 'react'
import Canciones from './paginas/Canciones'
import Historial from './paginas/Historial'

function App() {
  const [pagina, setPagina] = useState('canciones')

  return (
    <div className="contenedor">
      <h1>Challenge 03 - Listas</h1>

      <nav>
        <button onClick={() => setPagina('canciones')}>Lista enlazada</button>
        <button onClick={() => setPagina('historial')}>Lista doblemente enlazada</button>
      </nav>

      {pagina === 'canciones' ? <Canciones /> : <Historial />}
    </div>
  )
}

export default App
