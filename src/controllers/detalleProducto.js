console.log("Hola")

//llamar A La Memoria
let producto=JSON.parse(localStorage.getItem("producto"))

console.log(producto)

//Referenciar La Imagen Del Producto
let imagen=document.getElementById("imagenInfo")
imagen.src=producto.imagen
let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre
let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio
let description=document.getElementById("descripcionInfo")
description.textContent=producto.description
let popularity=document.getElementById("popularity")
popularity.textContent=producto.popularity

