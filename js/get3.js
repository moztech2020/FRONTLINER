 


var train = document.getElementById('trainForm');
train.addEventListener('submit',requestform);
function savemessage(name2,email2,phone2,course2){
      
        db.collection('trainForm').add({
            
              name:name2,
              email:email2,
              phone:phone2,
              course:course2
      
      

        }).then(()=>{
           loader.style.display= 'none';
    btn.style.display= 'block';

            document.querySelector('.alert2').style.display = 'block';
  // hide alert after 3 secs
  setTimeout(function(){
    document.querySelector('.alert2').style.display = 'none';


  },5000);

  //clear form
  document.getElementById('trainForm').reset();



            console.log("this was successful")
            

            
            
        });
} 


  


function requestform(e){
    e.preventDefault();
    loader.style.display= 'block';
    btn.style.display= 'none';
      
      

    //get values from request home tutor
  
   var name =document.getElementById("name2").value;
   var email =document.getElementById("email2").value;
  var phone =document.getElementById("phone2").value;
   var course =document.getElementById("course2").value;

   



   

    
   

    savemessage(name,email,phone,course);
  
}
    



//function to get form values






