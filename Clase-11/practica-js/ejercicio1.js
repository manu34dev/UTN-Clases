
let edad= prompt ('ingrese su edad')

    if (edad < 0) {console.log("Edad no valida")}
else if(edad < 13) {console.log ("Eres un niño")}
else if(edad >= 13 && edad <= 17 ) {console.log ("Eres un adolecente")}
else if(edad >= 18 && edad <= 64 ) {console.log ("Eres un adulto")}
else if(edad > 65) {console.log ("Eres una persona mayor")}

