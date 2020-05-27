function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = `
        <table class="table">
        <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">phone No</th>
                        <th scope="col">Email</th>
                        <th scope="col">course</th>
                        
                       
                        
                        
                    </tr>
                </thead>
                <tbody>
        `
        const form3 =  document.getElementById("form3");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `

                
               
                    <tr>
                        <td style="">${guide.name}</td>
                        <td>${guide.phone}</td>
                        <td>${guide.email}</td>
                        <td>${guide.course}</td>
                     
                       
                        
                        
                    </tr>
                
                
               

     
    
    
        `;
        html += content
        console.log(doc.id);
       
        // console.log(li)
    });

    html+= ` </tbody> 
                <table>
    `
  
   form3.innerHTML = html;

});
}


window.onload = function(){
    generalOutput('trainForm', 1000);
   
}