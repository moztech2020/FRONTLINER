 
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('admin-log').style.display = "none";
    document.getElementById('admin-pro').style.display = "block";
  } else {
   document.getElementById('admin-log').style.display = "block";
    document.getElementById('admin-pro').style.display = "none";

    if (user != null) {
	//var email = user.email
	document.getElementById("but").innerHTML="WelcomeAdmin";
}
  }
});
   
   var authen = document.getElementById('adminform').addEventListener('submit',login);

function login(e){

	
    e.preventDefault();
  

    //get values from request home tutor
  
   var email=document.getElementById("email").value;
   var password =document.getElementById("password").value;

   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  var errorMessage = error.message;
  console.log("Error: " + errorMessage )
  window.alert("Error: " + errorMessage)
  // ...
});
   
 }
 // var logo = document.getElementById('logn').addEventListener('submit',logout);
 function logout(){
 	firebase.auth().signOut();
 }

   