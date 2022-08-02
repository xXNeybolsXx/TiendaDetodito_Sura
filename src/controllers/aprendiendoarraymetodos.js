// let numeros=[25,60,80,100,25,60,80,100]

// //Recorrer Un Arreglo/Repetir Una Accion
// //Esculcar/Obtener De A 1 Elemento

// //1.ForEach
// numeros.forEach(function(numero){
//     console.log(numero)
// })

let productos=[

    {
        nombre:"Esferas De Agua",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/bola1.jpg?alt=media&token=7af41e30-32ae-44f0-9b1f-76031be25bbd",
        "https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/bola2.jpg?alt=media&token=89cb2045-cc85-44e1-82d8-78c775dd15ef" ],
        precio:15000,
        popularidad:4,
        descripcion:"Paquete de gran valor: el paquete incluye 20000 pequeñas cuentas de agua, 300 cuentas de agua grandes, nuevo combo te da una nueva experiencia diferente, cuentas de gran capacidad para que juegues con ellos."
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/crn1.jpg?alt=media&token=8669efc2-5118-4921-a777-738492fa12bd","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/crn2.jpg?alt=media&token=0d2122de-fee7-4fbe-834b-84ad0301b57c"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/foto1.jpg?alt=media&token=a8c58a6b-c7ca-4734-9ccd-8589db34687b","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/foto11.jpg?alt=media&token=20932fae-745d-40b5-87ed-54d4f6a99026"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/img2d.webp?alt=media&token=325ec1a6-5067-4740-80fc-91dc0c77ea6c","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/img2f.webp?alt=media&token=aa7980fb-79a4-46d5-baab-ec36bd4cb455"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/joni2.jpg?alt=media&token=179e8fd6-8b1f-4fa6-9460-65b43670cc8d","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/joni1.jpg?alt=media&token=24423af8-6e5d-4398-a5fa-d9e23f255d0e"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mous1.jpg?alt=media&token=ded66db5-0420-4df3-9bbf-6a093d72f7e1","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mous2.jpg?alt=media&token=8cef316e-0d82-4770-bb64-d84d8cf618a2"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mqn2.jpg?alt=media&token=76d7909c-b5db-4fb6-9054-3363c441d4a5","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/mqn1.jpg?alt=media&token=c3ab84ed-c678-4db9-9441-2dd8be31dbf4"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/noma1.jpg?alt=media&token=5f1c4b6d-f34c-44e6-bd52-e5aa6f4286b3","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/noma2.jpg?alt=media&token=d0faa1c3-0695-4fe4-a961-5429085ba81c"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/silla2.jpg?alt=media&token=be370884-2cf9-4881-8d7f-418814fbecda","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/silla1.jpg?alt=media&token=bc38874c-6ad6-49e9-9642-92c686fb73c0"],
        precio:0,
        popularidad:0,
        descripcion:""
    },
    {
        nombre:"",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/tecla2.jpg?alt=media&token=862507c0-2fb6-4546-a2a7-64d3b5a4881f","https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/tecla1.jpg?alt=media&token=d125200e-aaa4-46c0-ba14-bc1418e51bde"],
        precio:0,
        popularidad:0,
        descripcion:""
    },


]

let fila=document.getElementById("fila")


    //Recorriendo El Arreglo
    productos.forEach(function(producto){
             // console.log(comida.nombre)

    //Creando Un Div Desde JS
    let columna=document.createElement("div")
    columna.classList.add("col")
    
    //Creando Una Tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100","p-5")

    //Creando Una IMAGEN
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=producto.fotos[0]

    //Detectando Evento De Mouse
    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })

    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })
    //Crear Nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //Creando El Precio
    let precio=document.createElement("h2")
    precio.textContent="$" + producto.precio

    //Creando La Descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger","d-none")
    descripcion.textContent="Descripcion: " + producto.descripcion

    //Creando Popularidad
    let popularida=document.createElement("h2")
    popularida.textContent="Popularidad: " + producto.popularidad

    //Definiendo Padres E Hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularida)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    


 })