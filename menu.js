document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu2 = document.querySelector('.menu2');
  
    burgerIcon.addEventListener('click', function () {
      menu2.classList.toggle('show');
    });
  });
  