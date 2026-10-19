import { useState } from 'react'
import menu from './menu'
import { dfs, bfs } from './estructuras/ArbolNario'
import ItemMenu from './componentes/ItemMenu'

console.log('--- DFS ---')
dfs(menu)
console.log('--- BFS ---')
bfs(menu)

function App() {
  const [seleccionado, setSeleccionado] = useState(menu)

  const Componente = seleccionado.valor.componente

  return (
    <div className="pagina">
      <aside className="sidebar">
        <ul>
          {menu.hijos.map((hijo) => (
            <ItemMenu key={hijo.valor.link} nodo={hijo} seleccionado={seleccionado} onSeleccionar={setSeleccionado} />
          ))}
        </ul>
      </aside>

      <main className="contenido">
        <h1>{seleccionado.valor.titulo}</h1>
        <p className="link">Link: {seleccionado.valor.link}</p>
        <Componente />
      </main>
    </div>
  )
}

export default App
