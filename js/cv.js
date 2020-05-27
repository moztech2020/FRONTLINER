
var firebaseConfig = {
    apiKey: "AIzaSyCnZm34X-5Ns5ZMCFlDdLkZHo73CaViBGo",
    authDomain: "frontline-cd194.firebaseapp.com",
    databaseURL: "https://frontline-cd194.firebaseio.com",
    storageBucket: "frontline-cd194.appspot.com",
   };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
















var form2 = document.getElementById('bform')
var uploader= document.getElementById('uploader')
var cv = document.getElementById('cv');
cv.addEventListener('change',upload);



function upload(e){
    e.preventDefault();
      var cv = document.getElementById('cv').files[0];
      var cvName = cv.name;
      var storageRef = firebase.storage().ref('images/' + cvName);
      var task = storageRef.put(cv);
      task.on('state_changed',
      	function (snapshot){
      		var progress  = (snapshot.bytesTransferred/
      		snapshot.totalBytes) * 100;
      		console.log("upload is " + progress + " done" );
      	},
      	function error(err,){
      		console.log(error.messsage);

      	},
      	function (){
      		task.snapshot.ref.getDownloadURL().then(function (downloadURL){
      			console.log("downloadURL");

      		});

      	}
      	);
  }


