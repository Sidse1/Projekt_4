document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    var email = document.getElementById("emailInput").value;
    if (!isValidEmail(email)) {
      event.preventDefault();
      alert("Venligst indtast en gyldig e-mailadresse.");
    }
  });

  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }