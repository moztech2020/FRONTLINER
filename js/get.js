 
 



var dele = document.getElementById('getform');
dele.addEventListener('submit',requestform);
function savemessage(name, email,phone,subject,address){
      
        db.collection('getTutorForm').add({
            
              name:name,
        email:email,
        phone:phone,
      
     
      
       
       
       subject:subject,
       address:address
      
     
      

        }).then(()=>{
           loader.style.display= 'none';
    btn.style.display= 'block';

            document.querySelector('.alert').style.display = 'block';
  // hide alert after 3 secs
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';


  },5000);

  //clear form
  dele.reset();


            console.log("this was successful")
            
            
        });
} 


  

//reference messages  collection
  //var messagesRef = firebase.database().ref('messages');

  // listen for get tutor form submit


//submit form

function requestform(e){
    e.preventDefault();
    loader.style.display= 'block';
    btn.style.display= 'none';
      
      

    //get values from request home tutor
   var name = getInputval('name');
    var email = getInputval('email');
    var phone = getInputval('phone');
    
  
    
    var subject = getInputval('subject');
    var address = getInputval('address');
   
   
   

    savemessage(name, email,phone,subject,address);
  
}
    



//function to get form values
function getInputval(id){
    return document.getElementById(id).value;
}

//save message to fire base
/*function savemessage(name, email,phone,address,nclass,hclass,gender,nstudent,subject,hear,prefer,other){
    //var newMessageRef = messagesRef.push();
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

}*/




