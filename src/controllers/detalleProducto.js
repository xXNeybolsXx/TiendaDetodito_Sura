console.log("Hola")

//llamar A La Memoria
let producto = JSON.parse(localStorage.getItem("producto"))

console.log(producto)

let carritomemoria = JSON.parse(localStorage.getItem("carrito"))
console.log(carritomemoria)

if (JSON.parse(localStorage.getItem("carrito")) != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
    let pildora = document.getElementById("pildora")
    pildora.textContent=carrito.length
} else {
    carrito = [];
}

//Referenciar La Imagen Del Producto
let imagen = document.getElementById("imagenInfo")
imagen.src = producto.imagen
let nombre = document.getElementById("nombreInfo")
nombre.textContent = producto.nombre
let precio = document.getElementById("precioInfo")
precio.textContent = producto.precio
let description = document.getElementById("descripcionInfo")
description.textContent = producto.description
let popularity = document.getElementById("popularity")
popularity.textContent = producto.popularity
let pildora = document.getElementById("pildora")
console.log(pildora.textContent)

//escucho el click a añadir al carrito
let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click", function (evento) {

    let cantidad = document.getElementById("cantidadProducto")
    cantidad = cantidad.value
    console.log("agregaste la cantidad de " + cantidad)

    // agregamos la cantidad del objeto producto
    producto.cantidad = cantidad
    console.log(producto)

    // agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    // pintando la pildora con la informacion de la memoria
    let cantidadCarrito = carrito.length
    pildora.textContent = cantidadCarrito

    // agregando el carrito a la memoria 
    localStorage.setItem("carrito", JSON.stringify(carrito))




})

