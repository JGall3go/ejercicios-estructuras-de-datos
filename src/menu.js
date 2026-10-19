import { Nodo } from './estructuras/ArbolNario'
import {
  Inicio, Perfil, Mensajes, Configuracion, Cuenta, Seguridad, Contrasena,
  Notificaciones, Ayuda, PreguntasFrecuentes, EnviarTicket, EstadoRed, CerrarSesion,
} from './componentes/Paginas'

// Cada item del menú tiene título, link y componente
function crearItem(titulo, link, componente) {
  return new Nodo({ titulo, link, componente })
}

// La raíz no se muestra, solo sirve para colgar los menús principales
const menu = crearItem('Menú', '/', Inicio)

const perfil = crearItem('Perfil', '/perfil', Perfil)
const mensajes = crearItem('Mensajes', '/mensajes', Mensajes)

const configuracion = crearItem('Configuración', '/configuracion', Configuracion)
configuracion.agregarHijo(crearItem('Cuenta', '/configuracion/cuenta', Cuenta))
configuracion.agregarHijo(crearItem('Seguridad y privacidad', '/configuracion/seguridad', Seguridad))
configuracion.agregarHijo(crearItem('Contraseña', '/configuracion/contrasena', Contrasena))
configuracion.agregarHijo(crearItem('Notificaciones', '/configuracion/notificaciones', Notificaciones))

const ayuda = crearItem('Ayuda', '/ayuda', Ayuda)
ayuda.agregarHijo(crearItem('Preguntas frecuentes', '/ayuda/preguntas', PreguntasFrecuentes))
ayuda.agregarHijo(crearItem('Enviar un ticket', '/ayuda/ticket', EnviarTicket))
ayuda.agregarHijo(crearItem('Estado de la red', '/ayuda/estado-red', EstadoRed))

const cerrarSesion = crearItem('Cerrar sesión', '/cerrar-sesion', CerrarSesion)

menu.agregarHijo(perfil)
menu.agregarHijo(mensajes)
menu.agregarHijo(configuracion)
menu.agregarHijo(ayuda)
menu.agregarHijo(cerrarSesion)

export default menu
