function registrarProducto(){
    let confirmado = false
    let title
    let price
    let description
    let category
    let brand
    do {
        title = prompt('ingrese un titulo: ')
        while (title == null || title.length < 4 ) {
            title = prompt('el titulo debe tener 4 caracteres');
        }
        //price
        price = prompt ('ingrese un precio: ')
        while (price == null || price <=1){
            price = prompt ('ingrese un precio: ')
        }
        //description
        description = prompt ('ingrese una descripcion: ')
        while (description == null || description.length <10 ){
            description = prompt ('ingrese una descripcion: ')
        }
        //category
        category = prompt ('ingrese la categoria eligiendo alguna de las siguientes: tecnologia, hogar, otros')
        while (category !='tecnologia' && category !='hogar' && category !='otros'){
            category = prompt ('ingrese la categoria eligiendo alguna de las siguientes: tecnologia, hogar, otros')
        }
        //brand
        brand = prompt ('ingrese la marca: ')
        while (brand == null || brand.length <3){
            brand = prompt ('ingrese la marca: ')
        }

        confirmado = confirm (`titulo: ${title}
precio: ${price}
descripcion: ${description}
categoria: ${category}
marca: ${brand}
desea confirmar estos datos?`)

    } while (confirmado == false)
    
    return {
        titulo: title,
        precio: price,
        descripcion: description,
        categoria: category,
        marca: brand,
    }
}

console.log (registrarProducto())