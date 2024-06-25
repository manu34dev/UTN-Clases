const btnBuyHTML = document.getElementById('buy')
const contenedorCounterHTML = document.getElementById('counter')
const btnRestHTML = document.getElementById('btn-q')
const numberHTML = document.getElementById('number')
const btnAddHTML = document.getElementById('btn-add')

contenedorCounterHTML.style.display = 'none'

const onClick = () =>{
    btnBuyHTML.style.display = 'none'
    contenedorCounterHTML.style.display = 'flex'
}

btnBuyHTML.addEventListener('click', onClick)

const volver = ()=>{
    btnBuyHTML.style.display = 'flex'
    contenedorCounterHTML.style.display = 'none'
    }

const renderizarContador = () =>{
    numberHTML.innerText = number
}

const agregar = () =>{
    number = number + 1
    renderizarContador()
}

const restar = () =>{
    if (number > 1){
    number = number - 1
    renderizarContador()
    }
    else if (number === 1){
        volver()
    }
}

let number = 1
renderizarContador()

agregarHTML.addEventListener ('click', agregar)
btnRestHTML.addEventListener('click', restar)