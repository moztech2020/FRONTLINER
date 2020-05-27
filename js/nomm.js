 // Your web app's Firebase configuration
 /* var firebaseConfig = {
    apiKey: "AIzaSyCnZm34X-5Ns5ZMCFlDdLkZHo73CaViBGo",
    authDomain: "frontline-cd194.firebaseapp.com",
    databaseURL: "https://frontline-cd194.firebaseio.com",
    projectId: "frontline-cd194",
    storageBucket: "frontline-cd194.appspot.com",
    messagingSenderId: "443426487880",
    appId: "1:443426487880:web:dcec55fd72c7272ea7e27d",
    measurementId: "G-CFDQGL2G8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

//reference messages  collection
  var messagesRef = firebase.database().ref('messages');

  // listen for get tutor form submit
document.getElementById('getform').addEventListener('submit',requestform);

//submit form

function requestform(e){
    e.preventDefault();
      

    //get values from request home tutor
   var name = getInputval('name');
    var email = getInputval('email');
    var phone = getInputval('phone');
    var address = getInputval('address');
    var nclass = getInputval('nclass');
    var hclass = getInputval('hclass');
   var gender = getInputval('gender');
    var nstudent = getInputval('nstudent');
    var subject = getInputval('subject');
    var hear = getInputval('hear');
    var prefer= getInputval('prefer');
    var other= getInputval('other');

    savemessage(name, email,phone,address,nclass,hclass,gender,nstudent,subject,hear,prefer,other);
  //show alert
  document.querySelector('.alert').style.display = 'block';
  // hide alert after 3 secs
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';


  },3000);

  //clear form
  document.getElementById('getform').reset();
}
    



//function to get form values
function getInputval(id){
    return document.getElementById(id).value;
}

//save message to fire base
function savemessage(name, email,phone,address,nclass,hclass,gender,nstudent,subject,hear,prefer,other){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        phonenumber  :phone,
        Fulladdress:address,
      Numberofclassesperweek:nclass,
       Hoursperclass:hclass,
       Preferredgenderoftutors:gender,
       NumberofstudentorGradelevel:nstudent,
       Subjects:subject,
      Howdidyouhearaboutus:hear,
      preferredmodeofteaching:prefer,
       Otherdetails:other

    });

}




*/