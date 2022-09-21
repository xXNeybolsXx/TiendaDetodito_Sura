import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let botonIngresar=document.getElementById("botonIngresar")

botonIngresar.addEventListener("click",function(evento){

    evento.preventDefault()

    let email=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let formulario=document.getElementById("collapseExample")
    
    console.log(email,password)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((error) => {

        const errorCode = error.code
        const errorMessage = error.message

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'You entered successfully',
            //text: errorCode + errorMessage,

        
        });

        // Signed in
        
        
    })
    .catch((userCredential) => {
        
        // ..
        const user = userCredential.user
        // ...
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Incorrect password',
            showConfirmButton: false,
            timer: 2000
        });
        formulario.reset();
        
        console.log("errorr")
    });

});


