/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/
const compras = [
    {
    nombre: 'Yerba Marolio',
    id: 1,
    precio: '2500',
    cantidad: 5,
    img: 'https://img.freepik.com/foto-gratis/compras-familiares-mascarilla_23-2149565243.jpg?size=626&ext=jpg&ga=GA1.1.1069837818.1718112800&semt=ais_user'
},
{
    nombre: 'Leche La Serenisima',
    id: 2,
    precio: '1400',
    cantidad: 4,
    img: 'https://img.freepik.com/foto-gratis/compras-familiares-mascarilla_23-2149565243.jpg?size=626&ext=jpg&ga=GA1.1.1069837818.1718112800&semt=ais_user'
},
{
    nombre: 'Polenta Presto pronta',
    id: 3,
    precio: '1900',
    cantidad: 3,
    img: 'https://img.freepik.com/foto-gratis/compras-familiares-mascarilla_23-2149565243.jpg?size=626&ext=jpg&ga=GA1.1.1069837818.1718112800&semt=ais_user'
},
]

const carritoHTML = document.getElementById('carrito')

let carritoDeCompras = ''
for(const compra of compras ){
    carritoDeCompras = carritoDeCompras + `
    <div>
    <h3>${compra.nombre} id#${compra.id}</h3>
    <img width='100px' src="${compra.img}"/>
    <span>Precio unitario: ${compra.precio} x ${compra.cantidad} Unidades</span>
    <span>Total: ${compra.precio * compra.cantidad}</span>
</div>
<hr>
`
carritoHTML.innerHTML = carritoDeCompras

}
