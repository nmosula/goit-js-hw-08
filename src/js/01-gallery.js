// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryList = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description
}) => acc + `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`, '');

galleryList.insertAdjacentHTML('beforeend', markup);


galleryList.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
  
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });  

}