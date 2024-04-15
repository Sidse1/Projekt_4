let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Skift hvert 3. sekund (3000 millisekunder)
  }

  // Next/previous controls
  function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1}
    else if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
  }
