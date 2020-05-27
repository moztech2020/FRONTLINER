
function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = `
        <table class="table">
        <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">phone No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Subject and grade level</th>
                        <th scope="col">teaching experience </th>
                        <th scope="col">philosophy?</th>
                        <th scope="col">currently a teacher?</th>
                        <th scope="col">location</th>

                         <th scope="col">CV</th>  
                          


                        
                    </tr>
                </thead>
                <tbody>
        `
        const form2 =  document.getElementById("form2");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `

                
               
                    <tr>
                        <td style="">${guide.fname}</td>
                        <td>${guide.lname}</td>
                        <td>${guide.gender}</td>
                        <td>${guide.phone}</td>
                        <td>${guide.email}</td>
                        <td>${guide.Age}</td>
                        <td>${guide.subject}</td>
                        <td>${guide.years}</td>
                        <td>${guide.philo}</td>
                        <td>${guide.teach}</td>
                        <td>${guide.location}</td>
                        <td><a href="${guide.cv}"> click to check CV </a></td>
                        
                    </tr>    

    
        `;
        html += content
        console.log(doc.id);    
        // console.log(li)
    });

    html+= ` </tbody> 
                <table>
    `
  
   form2.innerHTML = html;

});
}


window.onload = function(){
    generalOutput('becomeTutor', 1000);
   
    // getSingleBlogPage();
    // this.alert('na we dey here');
}
