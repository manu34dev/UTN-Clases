/* WHILE/*  */
/* bucle while repite mientras se cumpla X condicion
 */
let numero = prompt('ingrese un numero') 

if (!numero || isNaN){
    alert('Error: dato no valido')
    numero = prompt('ingrese un numero')
} 
while (!nuemero || isNaN){
    alert('No ingreso un dato numerico')
    numero = prompt ('ingresa un dato numerico')
}

/* let texto = String (prompt ('ingrese una palabra'))

while(!texto || !isNaN){
    alert('no ingreso un dato valido')
    texto = prompt ('ingrese una palabra')
}


/* FOR
es un bucle que usamos cuando queremos repetir un bloque de codigo una determinada cantidad de veces */
/* di por consola 5 hola mundo */
/*   inicio         ;     limite   ;  ritmo de actualizacion ||| se repite hasta que se cumpla el limite establecido*/
/* for(let iterador = 1; iterador <= 5; iterador = iterador +1){
    console.log ("hola munedo" + iterador)
}
i = iterador (abreviacion)
*/
/* for (let iterador = 1; iterador <=3; iterador = iterador +1){
    let nombre = prompt ('ingrese un nombre')
    alert(nombre)
} 
Solicitar 3 nombres y al final mostrarlos en lista
pepe
juan
ezequiel
*/
/* let ListaDeNombres = 'lista de nombres'
for(let iterador=1; iterador<=3; iterador = iterador +1){
    let nombre = prompt('ingrese un nombre')
    ListaDeNombres = ListaDeNombres + '\n' + nombre
} */
/* vamos a solicitar un numero 3 veces al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
Ej:
3
3
2
resultado: 8 */
/* camelcase = ListaDeNumeros
snakecase = lista_de_numeros */
/* let acum = 0
for (let i = 1; i <= 3; i++) {
    numero = Number(prompt('Ingrese un numero'))
    acum = acum + numero
    console.log('El numero ' + i + ' es: ' + numero);
}
alert('La suma es : ' + acum); */
/* vamos a solicitar al usuario una cantidadDeRepeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizarmostrar el resultado de la sumatoria, validar que la cantidad de repeticiones sea un numero, en caso de no vovler a solicitarlo */

/* DRY = dont repeat yourself */

//FUNCIONES
//declarar una funcion "parametro es el nombre"
/* function saludar(nombre){
    alert('hola a ' + nombre)
} */

//invocar una funcion "pepe o juan es un argumento" 
/* saludar('pepe')
saludar('juan') */

//crear una funcion que permita sumar 2 numeros y que muestre el resultado
function sumar(numero1, numero2){
    let suma = numero1 + numero2
    console.log(suma)
}
//crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio
//ej: calcularIva(100) =>   console:21
function calcularIva(precio){
    return precio *0.21
}

let iva = calcularIva(100)

alert(iva)

function solicitarYValidarNumero (){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}



let cantidadDeRepeticiones = solicitarYValidarNumero()
let suma = 0

for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = solicitarYValidarNumero()
    suma = suma + numero
}
alert("El resultado es: " + suma) 

