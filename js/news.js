 



document.getElementById('contactForm').addEventListener('submit',requestform);
function savemessage(name,email,subject,message){
      
   db.collection('contactForm').add({
            
                  name:name,
        email:email,
        
      
     
      
       
       
       subject:subject,
       message:message
      
      
      

        }).then(()=>{

            document.querySelector('.alert').style.display = 'block';
  // hide alert after 3 secs
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';


  },3000);

  //clear form
  document.getElementById('contactForm').reset();


            console.log("this was successful")
            
            
        });
} 


  


function requestform(e){
    e.preventDefault();
      

    //get values from request home tutor
  
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var subject = document.getElementById("subject").value;
   var message = document.getElementById("message").value;

   
   

   savemessage(name,email,subject,message);
  
}
    






