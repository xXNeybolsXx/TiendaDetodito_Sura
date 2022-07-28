let boton=document.getElementById("boton")

boton.addEventListener("click",function(){
    let nombre = document.getElementById("nombre").value
    let saludo = document.getElementById("saludos")
    saludo.textContent= "Hola" + nombre + "Como Estas"

})