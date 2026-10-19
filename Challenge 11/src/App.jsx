import { useState } from 'react'
import Buscador from './estructuras/Buscador'

const buscador = new Buscador()

// Ejemplo de la diapositiva
buscador.insert('air max', 90)
buscador.insert('air force', 95)
buscador.insert('air jordan', 85)
buscador.insert('adidas boost', 80)

// Más productos de prueba
buscador.insert('adidas superstar', 88)
buscador.insert('adidas samba', 92)
buscador.insert('air max plus', 70)
buscador.insert('converse all star', 75)
buscador.insert('new balance 550', 83)
buscador.insert('nike dunk', 97)
buscador.insert('nike cortez', 60)
buscador.insert('puma suede', 65)

console.log('searchTopK("air", 2):', buscador.searchTopK('air', 2))

function App() {
  const [texto, setTexto] = useState('')
  const [k, setK] = useState(3)

  const resultados = texto === '' ? [] : buscador.searchTopK(texto.toLowerCase(), k)

  return (
    <div className="contenedor">
      <h1>Challenge 11 - Buscador inteligente</h1>

      <div className="barra">
        <input
          placeholder="Escribe un producto, ej: air"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <label>
          Top{' '}
          <input type="number" min="1" className="numero" value={k} onChange={(e) => setK(Number(e.target.value))} />
        </label>
      </div>

      {texto !== '' && resultados.length === 0 && <p>No hay productos que empiecen por "{texto}".</p>}

      <ol>
        {resultados.map((producto) => (
          <li key={producto.name}>
            {producto.name} <span className="popularidad">- popularidad: {producto.popularity}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
