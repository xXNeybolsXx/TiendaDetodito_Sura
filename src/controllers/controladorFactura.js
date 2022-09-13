let carrito=JSON.parse(localStorage.getItem("carrito"))
let totalCompra=document.getElementById("totalCompra")
let total = 0
let bandera = true

//
let factura=document.getElementById("factura")

//cCOMPRUEBO EL ESTADO DEL CARRITO DE COMPRAS

if(carrito==null){
  
    let titu = document.getElementById('titulo')
    titu.textContent = "Realiza una Compra!"
    //Poner El Total En = 0
    totalCompra.textContent="Total: $0"
    let conversor = document.getElementById("convertir")
    conversor.classList.add("d-none")
    

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center")

    let columna=document.createElement("div")
    columna.classList.add("col-12","col-md-4")

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src="../../assets/img/carr.jpg"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="Your cart is empty"

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)
    
}else{
    //recorro el carrito
    console.log("oeeee")
    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row","my-5","justify-content-center","shadow","p-3")

        let columna1=document.createElement("div")
        columna1.classList.add("col-2", "col-md-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-2", "col-md-3","border-end","align-self-center")

        let columna3=document.createElement("div")
        columna3.classList.add("col-12", "col-md-3","align-self-center","fs-1","text-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid", "w-100")
        foto.src=producto.imagen

        let nombre=document.createElement("h4")
        nombre.classList.add("text-center","text-dark")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h4")
        precio.classList.add("text-center", "text-dark")
        precio.textContent="unit cost: " + producto.precio


        let textoSubtotal = document.createElement("h3")
        textoSubtotal.classList.add("fw-bold")
        textoSubtotal.textContent= "subtotal"


        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center", "text-dark")
        cantidad.textContent="amount: " + producto.cantidad

        let subtotal=document.createElement("h2")
        subtotal.classList.add("fw-bold","text-center","bg-dark","text-white")
        console.log(producto.precio)
        console.log(precio.cantidad)
        console.log(producto.precio*producto.cantidad)
        
        


      
        
        let banana=producto.precio.split("$")[1]
        //console.log(banana)

        
        let subtotalCalculado=producto.precio.split("$")[1]*producto.cantidad
        //console.log(subtotalCalculado)
        subtotal.textContent="$ "+subtotalCalculado

        total = total+ subtotalCalculado
    
    

        //Creando Boton Limpiar Carrito

        let botonLimpiar=document.getElementById("botonLimpiar")
        botonLimpiar.addEventListener("click",function (evento){

            //Limpio El Carrito De La Memoria
            localStorage.removeItem("carrito")

            //Recargar La Pagina
            window.location.href="./resumenCompra.html"

            //Poner El Total En = 0
           


        })
     


        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna3.appendChild(textoSubtotal)
        columna3.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)

    
    })

}

totalCompra.textContent = "US " + total
totalCompra.classList.add("bg-dark", "text-white", "ps-3")


let conversor = document.getElementById("convertir")
conversor.classList.add("btn", "btn-dark")
conversor.textContent = "convert to COP"

conversor.addEventListener("click", function(){
    let USD = 4361
    let operacion = 0
    operacion = "COP " + total * (USD/1).toFixed(2);
    totalCompra.textContent = operacion
    conversor.textContent = "convert to USD"

    if (bandera == true) {
        conversor.addEventListener("click", function(){
          totalCompra.textContent = "US$ " + total
          conversor.textContent= "Convert to COP"
          
          
        })
        bandera = !bandera
       } else {
        conversor.addEventListener("click", function(){
   
          totalCompra.textContent = operacion
          conversor.textContent= "Convert to USD"
          
        })
        bandera = !bandera
        
       }
})