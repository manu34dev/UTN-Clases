/* const alertar = () =>{
alert ('Hola mundo')
}
 */
/* const btn2HTML = document.getElementById('btn-2')
btn2HTML.onclick = alertar

//Llamar a un elemento por clase
const btn3HTML = document.querySelector('.btn-3')

btn3HTML.addEventListener('click', alertar) */

const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}

const renderizarError = (textoError) =>{
    errorHTML.innerText = textoError 
}

const limpiarError = () =>{
    if (contadorHTML.innerText){
    renderizarError('')
    }
}

const incrementarContador = () =>{
    estadoContador = estadoContador + 1
    renderizarContador()
    limpiarError()
}

const decrementarContador = () =>{
    if(estadoContador > 1) {
    estadoContador = estadoContador -1
    limpiarError()
    renderizarContador()
    }
    else {
        renderizarError('No se puede decrementar a 0')
    }

}

const contadorHTML = document.getElementById ('contador')
const btnIncrementarHTML = document.querySelector('.btn-crementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')
const errorHTML = document.getElementById ('error-contador')


let estadoContador = 1
renderizarContador()

btnIncrementarHTML.addEventListener('click', incrementarContador)

btnDecrementarHTML.addEventListener('click', decrementarContador)