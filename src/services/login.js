import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let iniciar=document.getElementById("iniciar")

iniciar.addEventListener("click",function (evento) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  // ...
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
  });
})


