const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    for(let operacionDisponible of OPERACIONES_DISPONIBLES){
        if(operacionDisponible === operacion){
            return true
        }
    }
    return false
}

const validacionNumero = (numero) =>{
    return numero && !isNaN(numero)
}



const calculadora = () =>{
    let operacion = prompt('Ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('Error, operacion no disponible, seleccione una operacion')
    }

    let a = prompt("Ingrese un primer numero")
    while(!validacionNumero(a)){
        a = prompt("Error numero no valido, ingrese nuevamente")
    }

    let b = prompt('Ingrese un segundo numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a) + Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
} 
