let contenedorProductos=document.getElementById("fila")

//Escucho Click En la Fila
let informacionDelProducto={}

contenedorProductos.addEventListener("click",function(evento) {
    if(evento.target.classList.contains("img-fluid")){
        informacionDelProducto.nombre=(evento.target.parentElement.querySelector("h3").textContent)
        informacionDelProducto.precio=(evento.target.parentElement.querySelector("h2").textContent)
        informacionDelProducto.description=(evento.target.parentElement.querySelector("p").textContent)
        informacionDelProducto.popularity=(evento.target.parentElement.querySelector("h1").textContent)
        informacionDelProducto.imagen=(evento.target.parentElement.querySelector("img").src)
        //agregar popularity y la foto

        //Guardando Un Objeto En Memoria
        localStorage.setItem("producto",JSON.stringify(informacionDelProducto))

        window.location.href="./ampliarinfo.html"
    }

    
})