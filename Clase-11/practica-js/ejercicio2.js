let calificacion= prompt ('ingrese una calificacion')
if(calificacion <0 || calificacion >100) {
    console.log ("Calificacion no valida")
}
else if(calificacion >=90 && calificacion <=100) {
    console.log ("A")
}
else if (calificacion >=80 && calificacion <90) {
    console.log ("B")
}
else if (calificacion >=70 && calificacion <80) {
    console.log ("C")
}
else if (calificacion >=60 && calificacion <70) {
    console.log ("D")
}
else if (calificacion >=0 && calificacion <60) {
    console.log ("F")
}