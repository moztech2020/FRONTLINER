function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = `
        <table class="table">
        <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">phone No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subjects/Exams</th>
                        
                       
                        <th scope="col">Address</th>
                        
                    </tr>
                </thead>
                <tbody>
        `
        const myContent =  document.getElementById("myContent");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `

                
               
                    <tr>
                        <td style="">${guide.name}</td>
                        <td>${guide.phone}</td>
                        <td>${guide.email}</td>
                        <td>${guide.subject}</td>
                     
                        <td>${guide.address}</td>
                       
                        
                    </tr>
                
                
               

     
    
    
        `;
        html += content
        console.log(doc.id);
       
        // console.log(li)
    });

    html+= ` </tbody> 
                <table>
    `
  
   myContent.innerHTML = html;

});
}


window.onload = function(){
    generalOutput('getTutorForm', 1000);
   
    // getSingleBlogPage();
    // this.alert('na we dey here');
}