//arrays
//array lista de elementos ordenados

let nombre1="pepe"
let nombre2="juan"
let nombre3="ezequiel"
//indice,posicion 0   ,   1   ,   2
const nombres= ['pepe', 'juan', 'ezequiel']

//arrays, objetos y funciones siempre con constantes
console.log(nombres[1])
console.log("Tengo " + nombres.length + " nombres")
//array.lentgh propiedad del array
//metodos de array

//.push(): agrega un elemento al final del array y devuelve la nueva longitud
/* nombres.push('maria')
console.log(nombres) */

//unshift(): agrega un elemento al principio del array y devuelve nueva longitud
/* nombres.unshift('maria')
console.log(nombres)
 */
//pop():elimina el ultimo elemento y lo retorna
/* let ultimoelemento = nombres.pop()
console.log(ultimoelemento)
 */
//shift(): elimina el primer elemento y lo retorna

//indexof(): devuelve la posicion de un string en el array
/* let posiciondejuan = nombres.indexOf('juan')
console.log('La posicion de Juan es ' + posiciondejuan)

console.log(nombres) */

//splice():
/* nombres.splice(posiciondejuan, 1) */
/* primero parametro
desde donde va a empezar a eliminar
segundo parametro
cuantos va a eliminar
tercer parametro
elementos a agregar */

/* const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']

let posicionDeEzequiel = nombres2.indexOf('ezequiel')

const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 2)

console.log(nombres2)
console.log('la lista de eliminados es: ', listaDeEliminados) */

/* const nombres3= ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro'] */

/* let posicionDeLeonel = nombres3.indexOf('leonel')
let posicionDeElias = nombres3.indexOf('elias')
let posicionDeAbril = nombres3.indexOf('abril')

nombres3.splice(posicionDeLeonel, 1)
nombres3.splice(posicionDeElias, 1)
nombres.splice(posicionDeAbril,0, 'sofia')
console.log(nombres3) */

//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril
//REGLAS:
//-No se puede mirar el array
//-Si van a poder usar consola

//includes(): chequea que un elemento este dentro de un array

const nombres3= ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
/* for(let index = 0; index <nombres3.length; index = index + 1){
    console.log(nombres3[index])
}
let contador = 0
for(let index = 0 ; index < nombres3.length ; index = index+1){
    console.log(nombres3[index])
    contador = contador + nombres3[index].length
}
console.log('La cantidad de caracteres es ' + contador) */

/*string.lenght => Obtener la cantidad de caracteres de un string */
/* Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres.
Al finalizar el recorrido decir "La cantidad de caracteres es: {sumatoria caracteres}
ejemplo {'pepe', 'juan'} // la sumatoria de caracteres es 8*/

/* for(let nombre of nombres3){
    console.log(nombre)
}
 */
//dado que el siguiente array crea un segundo array llamado mayusculas que solo contenga las palabras en mayusculas
/* const array = ['pepe', 'lucas', 'PEDRO', 'JuaN']; */
/* let mayusculas = [];
for (let nombre of array) {
    if (nombre !== nombre.toLowerCase()) {
        mayusculas.push(nombre);
    }
}
console.log(mayusculas); */
//esto debe generar un segundo array con [PEDRO, JuaN]

/* const estaEnMinuscula = (str) =>{
    return str == str.toLowerCase
}
const estaEnMayuscula =(str) =>{
    return !estaEnMinuscula(str)
}

for (let Elemento of array){

} */

const producto =[
    {
        tittle: 'tv samsung 32""',
        price: 3000,
        marca: 'samsung',
    },
    {
        tittle: 'tv samsung 50""',
        price: 4600,
        marca: 'samsung',
    },
    {
        tittle: 'tv LG 42""',
        price: 3500,
        marca: 'LG',
    },
    {
        tittle: 'tv noblex 50""',
        price: 4500,
        marca: 'noblex',
    },
    {
        tittle: 'tv novlex 65""',
        price: 6000,
        marca: 'noblex',
    },
]


/* crear un array llmado samsung que contenga los productos que sean de la marca samsung */

const Samsung = []
for (const producto of productos) {
    if (producto.marca === 'samsung') {
        samsung.push(producto);
    }
}

console.log(samsung);

/* crear una funcion que se llame buscarProducto que reciba un string y por cada producto del array de producto verificara si el titulo tiene incluido el estring buscado
esta funcion debe retortar un array de productos

EJEMPLO:
buscarProducot('noblex')// retorna[
    {
        tittle: 'tv noblex 50""',
        price: 4500,
        marca: 'noblex',
    },
    {
        tittle: 'tv novlex 65""',
        price: 6000,
        marca: 'noblex',
    },
]
 */