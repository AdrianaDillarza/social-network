// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAau7Vg5_6obNBGxf19-3e5nwe0w8sNRp0",
   authDomain: "not-alone-41459.firebaseapp.com",
   databaseURL: "https://not-alone-41459.firebaseio.com",
   projectId: "not-alone-41459",
   storageBucket: "",
   messagingSenderId: "971433045993"
 };
 firebase.initializeApp(config);




 //Autenticacion con Google

 $("#googleBtn").click(function(){
   authGoogle();
 })

 function authGoogle() {
   var provider = new firebase.auth.GoogleAuthProvider();
   authentication(provider);
 }

 function authentication(provider){
   firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token. You can use it to access the Google API.
 var token = result.credential.accessToken;
 // The signed-in user info
 var user = result.user;
 console.log(result);
 }).catch(function(error) {
 console.log(error);
 // Handle Errors here.
 var errorCode = error.code;
 console.log(errorCode);
 var errorMessage = error.message;
 console.log(errorMessage);
 // The email of the user's account used.
 var email = error.email;
 console.log(email);
 // The firebase.auth.AuthCredential type that was used.
 var credential = error.credential;
 console.log(credential);
 // ...
});

}

// Login
firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.

   document.getElementById("user_div").style.display = "block"; //lo muestra
   document.getElementById("login_div").style.display = "none"; // lo oculta

   var user = firebase.auth().currentUser;

   if(user != null){

     var email_id = user.email;
     document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

   }

 } else {
   // No user is signed in.

   document.getElementById("user_div").style.display = "none";
   document.getElementById("login_div").style.display = "block";

 }
});

//funcion para iniciar sesion

function login(){
 //identificar valores de input que pone el usuario
 var userEmail = document.getElementById("email_field").value;
 var userPass = document.getElementById("password_field").value;

 //indicar que le vamos a pasar un correo y una contraseña
 firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;

   window.alert("Error : " + errorMessage);

   // ...
 });

}
//funcion para registrarse
function register(){

 var email = document.getElementById("email_field").value;
 var password = document.getElementById("password_field").value;

 firebase.auth().createUserWithEmailAndPassword(email, password)
 .catch(function (err) {
  // Handle errors
 });

}

//funcion para salir de la sesion
function logout(){
 firebase.auth().signOut();
}
