import { useState } from 'react'
import Tree from 'react-d3-tree'
import ArbolBinario from './estructuras/ArbolBinario'


const numeros = [50, 30, 70, 20, 40, 60, 80, 35, 65, 90]
const arbol = new ArbolBinario()
for (const numero of numeros) {
  arbol.insertar(numero)
}


console.log('--- Inorden ---')
arbol.inorden(arbol.raiz)
console.log('--- Postorden ---')
arbol.postorden(arbol.raiz)
console.log('--- Preorden ---')
arbol.preorden(arbol.raiz)


function convertirParaD3(nodo) {
  const resultado = { name: String(nodo.valor), children: [] }

  if (nodo.izquierda) {
    resultado.children.push(convertirParaD3(nodo.izquierda))
  }
  if (nodo.derecha) {
    resultado.children.push(convertirParaD3(nodo.derecha))
  }

  return resultado
}

const datosArbol = convertirParaD3(arbol.raiz)

function App() {
  const [valorBuscado, setValorBuscado] = useState('')
  const [mensaje, setMensaje] = useState('')

  function buscar(e) {
    e.preventDefault()
    if (valorBuscado === '') return

    const numero = Number(valorBuscado)
    if (arbol.buscar(numero)) {
      setMensaje('El ' + numero + ' sí está en el árbol')
    } else {
      setMensaje('El ' + numero + ' no está en el árbol')
    }
  }

  return (
    <div className="contenedor">
      <h1>Challenge 08 - Árbol binario</h1>
      <p>Números insertados: {numeros.join(', ')}</p>
      <p>Los recorridos inorden, postorden y preorden se imprimen en la consola (F12).</p>

      <form onSubmit={buscar}>
        <input type="number" placeholder="Valor a buscar" value={valorBuscado} onChange={(e) => setValorBuscado(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      {mensaje !== '' && <p><b>{mensaje}</b></p>}

      <div className="arbol">
        <Tree data={datosArbol} orientation="vertical" translate={{ x: 375, y: 40 }} nodeSize={{ x: 90, y: 90 }} pathFunc="straight" collapsible={false} />
      </div>
    </div>
  )
}

export default App
