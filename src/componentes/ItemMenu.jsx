import { useState } from 'react'

function ItemMenu({ nodo, seleccionado, onSeleccionar }) {
  const [abierto, setAbierto] = useState(false)
  const tieneHijos = nodo.hijos.length > 0

  function alDarClic() {
    onSeleccionar(nodo)
    if (tieneHijos) {
      setAbierto(!abierto)
    }
  }

  return (
    <li>
      <a
        href={'#' + nodo.valor.link}
        className={seleccionado === nodo ? 'activo' : ''}
        onClick={alDarClic}
      >
        {nodo.valor.titulo}
        {tieneHijos && <span>{abierto ? '▲' : '▼'}</span>}
      </a>

      {tieneHijos && abierto && (
        <ul className="submenu">
          {nodo.hijos.map((hijo) => (
            <ItemMenu key={hijo.valor.link} nodo={hijo} seleccionado={seleccionado} onSeleccionar={onSeleccionar} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default ItemMenu
