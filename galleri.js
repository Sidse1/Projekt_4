const galleryInner = document.querySelector('.gallery-inner');
const galleryItems = document.querySelectorAll('.gallery-item');


const images = [ 'natur.jpg', 'natur.vand.jpg', 'natur.piger.jpg'];


images.forEach(image => {
  const newItem = document.createElement('div');
  newItem.classList.add('gallery-item');
  newItem.innerHTML = `<img src="${image}" alt="Image">`;
  galleryInner.appendChild(newItem);
});
