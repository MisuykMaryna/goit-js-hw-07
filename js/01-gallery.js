import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImages = (images) => 
   images.map(({ preview, original, description }) => `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
       class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
 </div>`).join('');
    

const insertGalleryList = (string) => {
    const div = document.querySelector(".gallery");
    div.insertAdjacentHTML("beforeend", string)
 }

const instance = basicLightbox.create(`
    <img src="${evn.target.dataset.source}" width="800" height="600">
`)

instance.show()

insertGalleryList(galleryImages(galleryItems));


console.log(galleryImages(galleryItems));




