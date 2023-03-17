import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery")
const markup = galleryItems.map((galleryItem) => createElement(galleryItem)).join('');

function createElement({preview, original, description }){
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
}

galleryContainer.insertAdjacentHTML("beforeend", markup);

galleryContainer.addEventListener('click', handleGalleryContainerClick);

console.log(instance)
function handleGalleryContainerClick (event){
    event.preventDefault();
    

    if (event.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
    }else {
        return;
    }
}
