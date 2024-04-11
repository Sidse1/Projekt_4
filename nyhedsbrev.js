document.getElementById("newsletterform").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission
  
  // Get the email input value
  let email = document.getElementById("email").value;
  
  // Display pop-up message
  alert("Tak fordi du tilmeldte dig nyhedsbrevet med følgende e-mail: " + email);
  
  // Optionally, you can submit the form here if needed
  // this.submit();
});
