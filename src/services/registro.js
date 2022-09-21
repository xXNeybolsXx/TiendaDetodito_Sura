import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")

botonRegistro.addEventListener("click",function(evento){

    evento.preventDefault()

    let email=document.getElementById("correo1").value
    let password=document.getElementById("password1").value

    let formulario=document.getElementById("formulario1")
    
    console.log(email,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Successful registration',
            showConfirmButton: false,
            timer: 2000
        })
        formulario.reset()
        
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Registered mail',
            text: errorMessage,
        
          })
    });

})