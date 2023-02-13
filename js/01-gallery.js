import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
 

const galleryImages = (galleryItems) => 
   galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
       class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
 </div>`).join('');
    
galleryEl.insertAdjacentHTML("beforeend", galleryImages(galleryItems));
galleryEl.addEventListener("click", galleryImagesCards);
 
function galleryImagesCards(evt) {
    evt.preventDefault();
    if (!evt.target.dataset.source) {
        return;
    }
    const onCloseModal = (evt) => {
        const ESC_KEY = "Escape";
        if (evt.code === ESC_KEY) {
            instance.close();
        }
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, {
        onShow: () => document.addEventListener("keydown",onCloseModal),
        onClose: () => document.removeEventListener("keydown", onCloseModal),
    })

    instance.show()

}

console.log(galleryImages(galleryItems));




