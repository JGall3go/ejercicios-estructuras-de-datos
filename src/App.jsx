import { useState } from 'react'
import Stack from './estructuras/Pila'

// Pila con libros de prueba
const pila = new Stack()
pila.push({ nombre: 'Cien años de soledad', isbn: '978-0307474728', autor: 'Gabriel García Márquez', editorial: 'Sudamericana' })
pila.push({ nombre: 'Don Quijote de la Mancha', isbn: '978-8424116378', autor: 'Miguel de Cervantes', editorial: 'Espasa' })
pila.push({ nombre: 'El principito', isbn: '978-0156012195', autor: 'Antoine de Saint-Exupéry', editorial: 'Salamandra' })
pila.print()

function App() {
  // Copia de los libros de la pila para que React vuelva a pintar la pantalla
  const [libros, setLibros] = useState(pila.items.slice())

  const [nombre, setNombre] = useState('')
  const [isbn, setIsbn] = useState('')
  const [autor, setAutor] = useState('')
  const [editorial, setEditorial] = useState('')

  function agregarLibro(e) {
    e.preventDefault()

    if (nombre === '' || isbn === '' || autor === '' || editorial === '') {
      alert('Llena todos los campos')
      return
    }

    pila.push({ nombre, isbn, autor, editorial })
    pila.print()
    setLibros(pila.items.slice())

    setNombre('')
    setIsbn('')
    setAutor('')
    setEditorial('')
  }

  function sacarLibro() {
    pila.pop()
    setLibros(pila.items.slice())
  }

  // Se muestran al revés para que el último libro agregado quede arriba
  const librosEnPantalla = libros.slice().reverse()

  return (
    <div className="contenedor">
      <h1>Challenge 04 - Pila de libros</h1>

      <h2>Agregar libro</h2>
      <form onSubmit={agregarLibro}>
        <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        <input placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
        <input placeholder="Editorial" value={editorial} onChange={(e) => setEditorial(e.target.value)} />
        <button type="submit">Agregar a la pila</button>
      </form>

      <h2>Pila de libros ({libros.length})</h2>
      <p>Libro de arriba: <b>{pila.isEmpty() ? 'La pila está vacía' : pila.peek().nombre}</b></p>
      <button onClick={sacarLibro} disabled={pila.isEmpty()}>Sacar libro de arriba</button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ISBN</th>
            <th>Autor</th>
            <th>Editorial</th>
          </tr>
        </thead>
        <tbody>
          {librosEnPantalla.map((libro, i) => (
            <tr key={i}>
              <td>{libro.nombre}</td>
              <td>{libro.isbn}</td>
              <td>{libro.autor}</td>
              <td>{libro.editorial}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
