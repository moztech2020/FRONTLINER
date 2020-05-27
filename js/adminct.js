function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = `
        <table class="table">
        <thead>
                    <tr>
                        <th scope="col"> Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                        
                       
                       
                        
                    </tr>
                </thead>
                <tbody>
        `
        const contact =  document.getElementById("contact");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `
        

                
               
                    <tr>
                        <td style="">${guide.name}</td>
                        <td>${guide.email}</td>
                        <td>${guide.subject}</td>
                        <td>${guide.message}</td>
                     
                       
                        
                        
                    </tr>
                
                
               

     
    
    
        `;
        html += content
        console.log(doc.id);
       
        // console.log(li)
    });

    html+= ` </tbody> 
                <table>
    `
  
   contact.innerHTML = html;

});
}


window.onload = function(){
    generalOutput('contactForm', 1000);
   
}