/* ## Historial


-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos devuelve null el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial (debe retornar un array)
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localstorage el objeto recibido
 */
const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}



const solicitarDato = (objetoDeConfeccion) => {

    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje: 'Ingrese un email, por favor.',
        error: 'Error email invalido: ingrese nuevamente el email',
        validacion: validacionEmail
    },
    PASSWORD:{
        mensaje: 'Ingrese una password',
        error: 'Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula',
        validacion: validacionPassword
    } 

}




const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(DATOS.EMAIL)
    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

localStorage.getItem('user', JSON.stringify (usuario))

function obtenerHistorial () {
    JSON.parse('user'(usuario))
}
function guardarHistorial(){
    localStorage.setItem('user', usuario)
}
