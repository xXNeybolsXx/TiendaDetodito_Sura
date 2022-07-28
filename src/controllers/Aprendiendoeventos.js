let EtiquetaBoton=document.getElementById("boton")


//Pasos Para Detectar Eventos
EtiquetaBoton.addEventListener("click",function(){
    console.log("Estoy Haciendo Clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="Hola Soy Brandon"
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="Mentiris"
    mensaje.classList.add("text-danger")
    let foto=document.getElementById("foto")
    foto.src="https://firebasestorage.googleapis.com/v0/b/tiendacomfama-554dc.appspot.com/o/taparoja1.webp?alt=media&token=960a702a-13b5-4413-88a7-c187ec021df8"


})