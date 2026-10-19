# Challenge 10 - Grafos

- Grafo de amigos y ciudades (`src/estructuras/Grafo.js`), basado en la clase `Graph` de la diapositiva: `addNode`, `addEdge`, `searchNode`, `printAdjacency` y `printGraph`.
- En `src/datos.js` se llenan las ciudades (nombre) y las personas (nombre y edad). Cada persona queda unida a su ciudad y a sus amigos.
- El método `personasDeCiudad(ciudad)` devuelve las personas que viven en una ciudad. En pantalla se escoge la ciudad en una lista.
- El grafo se dibuja con `react-d3-graph`.

## Cómo correrlo

```
npm install
npm run dev
```

`react-d3-graph` es una librería vieja que pide React 16, por eso el archivo `.npmrc` tiene `legacy-peer-deps=true`, para que `npm install` funcione con React 18.
