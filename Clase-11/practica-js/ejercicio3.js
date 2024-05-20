//parametros juntos webon
let eje1= prompt('ingrese primer lado:')
let eje2= prompt('ingreso segundo lado:')
let eje3= prompt('ingrese tercer lado:')
if (eje1 <=0){
    console.log("el primer valor no es valido")
}
if (eje2 <=0) {
    console.log("el segundo valor no es valido")
}
if (eje3 <=0) {
    console.log("el tercer valor no es valido")
}
if (eje1 >0 && eje2 >0 && eje3 >0) {
    //console.log("triangulo equilatero")
    if (eje1 == eje2 && eje2 == eje3){
        console.log("triangulo equiatero")
    }
    //Isósceles: dos lados son iguales.
    if (eje1 == eje2 || eje1 == eje3 || eje2 == eje3) {
        console.log("triangulo Isóceles")
    }
    //Escaleno: todos los lados son diferentes.
    if (eje1 != eje2 && eje1 != eje3 && eje2 != eje3) {
        console.log("triangulo escaleno")
    }
}
