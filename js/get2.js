 
 var storage = firebase.storage();


  var form2 = document.getElementById('bform')
  form2.addEventListener('submit',requestform);
function savemessage(fname,lname,age,email,gender,phone,subject,years,teach,philo,location,cv){
       
   
        db.collection('becomeTutor').add({
            
             fname:fname,
        lname:lname,
        Age:age,
        email:email,
        gender:gender,
      phone:phone,
       subject:subject,
     years:years,
       teach:teach,
       subject:subject,
      philo:philo,
      location:location,
      cv:cv
      

        }).then(()=>{
           loader.style.display= 'none';
    btn.style.display= 'block';
      

            document.querySelector('.alert').style.display = 'block';
  // hide alert after 3 secs
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    alert("Successful, we would get back to you");


  },3000);

  //clear form
  form2.reset();


            console.log("this was successful")
            
            
        });
} 



  

//reference messages  collection
  //var messagesRef = firebase.database().ref('messages');

  // listen for get tutor form submit
//document.getElementById("bform").addEventListener('submit',requestform);

//submit form

function requestform(e){
    e.preventDefault();
    loader.style.display= 'block';
    btn.style.display= 'none';
      

    //get values from request home tutor
   var fname = ivalue('fname');
   var lname = ivalue('lname');
   
    var age = ivalue('age');
    var gender = ivalue('gender');
    var email = ivalue('email');
    var phone = ivalue('phone');
    var subject = ivalue('subject');
    
    var years = ivalue('years');
    var teach = ivalue('teach');
   
    var philo = ivalue('philo');
    var location = ivalue('location');
    var cv = ivalue('cv');


    
    

   
  //show alert
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
        function error(err){
          

        },
        function (){
          task.snapshot.ref.getDownloadURL().then(function (downloadURL){
            console.log(downloadURL);
             savemessage(fname,lname,age,email,gender,phone,subject,years,teach,philo,location,downloadURL);
             console.log("successful");

          });

        }
        );
}
    



//function to get form values
function ivalue(id){
    return document.getElementById(id).value;
}

//save message to fire base






