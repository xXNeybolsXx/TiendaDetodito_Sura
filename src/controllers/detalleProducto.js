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
precio.classList.add("mt-3", "mb-3")
precio.textContent = producto.precio
let description = document.getElementById("descripcionInfo")
description.classList.add("mt-3", "mb-3", "text-center","fs-7")
description.textContent = producto.description


//referencia a las estrellas
let popularity = document.getElementById("popularity")
popularity.classList.add("d-none", "mt-3", "mb-3" )
popularity.textContent=producto.popularity


//creando las estrellas Las Estrellas
let contenedorEstrellas=document.getElementById("contendorEstrellas")
let popularidaInfo= document.getElementById("popularity")

for (let i=1; i<=producto.popularity;i++){
    let estrella=document.createElement("i")
    estrella.classList.add("bi", "bi-star-fill", "text-warning")
    contenedorEstrellas.appendChild(estrella)

} 
    



let pildora = document.getElementById("pildora")
console.log(pildora.textContent)



//escucho el click a añadir al carrito
let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click", function (evento) {

    Swal.fire({ 
        position: 'buttom-end',
        width:'500px',
        height:'50px',
        icon: 'success',
        title: 'Compra añadida en Éxito!',
        showConfirmButton: false,
        timer: 700
      })
      

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

