
let emailList = [];

emailList.push("skolemail1@gmail.com");
emailList.push("mailskole5@gmail.com");

document.getElementById("newsletterform").addEventListener("submit", function(event){
  event.preventDefault(); 
  
  let email = document.getElementById("email").value;
  
  if(emailList.includes(email)) {
    alert("Denne e-mail er allerede tilmeldt nyhedsbrevet.");
  } else {
    emailList.push(email);
    alert("Tak fordi du tilmeldte dig nyhedsbrevet med følgende e-mail: " + email);
  }

  
  console.log("Alle emails på listen:");
  emailList.forEach(function(item) {
    console.log(item);
  });
});


