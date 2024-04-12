const galleryInner = document.querySelector('.gallery-inner');
const galleryItems = document.querySelectorAll('.gallery-item');


const images = ['images/Firefly unge på guidet tur i en skov med naturvejleder 76183.jpg', 'bilde1.jpg', 'ko.jpg', 'vand.jpg'];


images.forEach(image => {
  const newItem = document.createElement('div');
  newItem.classList.add('gallery-item');
  newItem.innerHTML = `<img src="${image}" alt="Image">`;
  galleryInner.appendChild(newItem);
});
