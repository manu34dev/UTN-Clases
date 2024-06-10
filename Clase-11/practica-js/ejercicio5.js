let temperatura= prompt ('ingrese temperatura')

if (temperatura === '' || temperatura === null || isNaN(temperatura))
    console.log("Temperatura no valida");
else{
if(temperatura <0){
    console.log ("Solido")
}
else if (temperatura >0 && temperatura <99){
    console.log ("Liquido")
}
else if (temperatura >=100){
    console.log ("Gaseoso")
}
}