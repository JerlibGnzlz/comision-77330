import { fa, faker } from '@faker-js/faker';


const generarProducto = () => {

    return {
        id: faker.string.uuid(),
        tite: faker.commerce.productName(),
        price: faker.commerce.price(),
        categoriy: faker.commerce.department(),
        stock: faker.number.int({ min: 0, max: 100 }),
        createdAt: new Date()
    }

}


let generarProductos = (parametro) => {


    const productos = []

    for (let i = 0; i < parametro; i++) {
        productos.push(generarProducto())
    }
    return productos
}





// console.log(generarProducto())
console.log(generarProductos(100))