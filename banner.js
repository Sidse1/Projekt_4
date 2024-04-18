let slideIndex = 0; //* variabel//*
  showSlides();

  function showSlides() {  //* funktion//*
    let i; //* variabel//*
    let slides = document.getElementsByClassName("mySlides"); //* variabel og array//*
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); 
  }

  
  function plusSlides(n) //*funktion//*  
  {
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides"); //* variabel//*
    if (slideIndex > slides.length) {slideIndex = 1}
    else if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
  }
