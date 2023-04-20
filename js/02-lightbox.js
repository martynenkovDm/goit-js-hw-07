import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const liImgList = galleryItems.map(item => {
    const { preview, original, description } = item;
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                        loading="lazy"
                    />
                </a>
            </li>`
      
}).join('');
galleryEl.insertAdjacentHTML("beforeend", liImgList);
const bigImg = new SimpleLightbox('.gallery a');
