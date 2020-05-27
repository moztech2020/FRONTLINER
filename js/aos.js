/*
var firebaseConfig = {
    apiKey: "AIzaSyDTV8NGcXyw0S5gYy8Gg8Ux4LG8mFF7KuM",
    authDomain: "itus-academy.firebaseapp.com",
    databaseURL: "https://itus-academy.firebaseio.com",
    projectId: "itus-academy",
    storageBucket: "itus-academy.appspot.com",
    messagingSenderId: "521634374559",
    appId: "1:521634374559:web:cc0a0d19e73bdb333813aa",
    measurementId: "G-XF5GPN8T3P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var registerForm = document.getElementById('registerForm');
var successMessage = document.getElementById('successMessage');
var loader = document.getElementById('loader');
var buta = document.getElementById('buta')

registerForm.addEventListener('submit', regForm);

function saveRegistrationForm(fullname,phone,address,serviceRequired,incentive){

        db.collection('regForm').add({
            
            fullname:fullname,
            phone:phone,
            address:address,
            serviceRequired:serviceRequired,
            incentive:incentive

        }).then(()=>{

            successMessage.style.display= 'block';
            defaultText.style.display = 'none';

            console.log("this was succeeful")
            registerForm.reset();
            loader.style.display = 'none';
            buta.style.display = 'block';
            
        })
} 
 
function regForm(e){

    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const phone  = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const service = document.getElementById('serviceRequired')
    var serviceRequired = service.options[service.selectedIndex].value;
    
    const incentives = document.getElementById('incentive')
    var incentive = incentives.options[incentives.selectedIndex].value;
    loader.style.display= 'block';
    buta.style.display = 'none'

    saveRegistrationForm(fullname,phone,address,serviceRequired,incentive);
    
    console.log('fullname' + fullname);
    console.log('phone' + phone);
    console.log('address' + address);
    console.log('serviceRequired' + serviceRequired);
    console.log('incentive' + incentive);

}*/