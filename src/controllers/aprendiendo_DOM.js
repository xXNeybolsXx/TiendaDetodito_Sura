//Pasos Para Controlar Una Etiqueta Desde JS

//1. Controlando El Contenido
let etiquetatitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")

//1.1 Manipulando El Texto De La Etiqueta(Elemento)
etiquetatitulo.textContent="Jefe Dame Plata"

//1.2 Manipulando El SRC
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/foto11.jpg?alt=media&token=52d8e209-acec-4ee1-9beb-86ada4d79282"

//Controlando El Diseño

let parrafo=document.getElementById("parrafo")
parrafo.textContent="Brandon Ruda" 

//Agregando Un Estilo(Clase /Class)
//text-danger

parrafo.classList.add("text-danger","fs-1","text-center")

//Jugando Con La Imagen

etiquetaImagen.classList.add("d-block","mx-auto")

//2.2 Quitar Un Estilo()
parrafo.classList.remove("text-danger")