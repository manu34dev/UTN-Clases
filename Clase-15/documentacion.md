### Calculadora

## funcionalidades

-login
    -solicitar un email
    -solicitar un password

-Calcular Operaciones
    -Operaciones disponibles:
    1) +
    2) -

-Historia
    -Agregar al historial
    -Mostrar historial/renderizar historial

## Utilidades

-Validaciones:
    -numero
    -password
    -email
    -operacionesCalculadora

## Reglas

Los ejercicios se pueden resolver de muchas formas
Si crees necesario usar funciones, las podes usar
Cumplir en la medida de los posible con el principio DRY y el principio KISS

ESTO ESTA MAL
function a(n){
    return abc-z    
}
let v = "1.1.1"

## Logica

Una funcion la usamos para evitar reescribir logica o separar logica

## Login

Debo tener una funcion de login que active toda la logica de login

logica de login

vamos a solicitar al usuario un email
Validaremos que sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solictar al usuario una password 
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() //retorna  el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
}







