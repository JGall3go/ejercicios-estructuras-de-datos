# Challenge 11 - Buscador inteligente + Top resultados

- `src/estructuras/Trie.js`: el Trie de la diapositiva. Guarda cada producto en el nodo donde termina su nombre y tiene `searchPrefix(prefix)` para buscar por prefijo.
- `src/estructuras/MinHeap.js`: el MinHeap de la diapositiva, comparando los productos por `popularity`.
- `src/estructuras/Buscador.js`: tiene `insert(name, popularity)` y `searchTopK(prefix, k)`. Busca por prefijo en el Trie y usa un MinHeap de tamaño k para quedarse con los k más populares.
- En pantalla se escribe un prefijo y se ve el top K de productos.

Ejemplo (sale en la consola):

```
searchTopK("air", 2) -> [ { name: "air force", popularity: 95 }, { name: "air max", popularity: 90 } ]
```

## Cómo correrlo

```
npm install
npm run dev
```
