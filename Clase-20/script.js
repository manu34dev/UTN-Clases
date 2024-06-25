//fetch es una funcion que me permite hacer peticiones HTTP, recibe 2 parametros
//1) URL un string que sera la url a la que vamos a consultar
//2) un objeto de confguracion de la peticion
/* fetch ('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
}) */
//promise: elemento con estado (asincronico)
//async await
//hacer que fetch se comporte de manera sincronica
const solicitarUsuario = async () =>{
    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
    console.log (respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
}
//peticion http desde JS

solicitarUsuario()

/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/