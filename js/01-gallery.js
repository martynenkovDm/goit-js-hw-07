import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
let basicLightboxEl;
let bigImg;
const liImgList = galleryItems.map(item => {
    const { preview, original, description } = item;

    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        loading="lazy"
                    />
                </a>
            </li>`
      
}
).join('');
galleryEl.insertAdjacentHTML("beforeend", liImgList);
galleryEl.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
    bigImg = basicLightbox.create(
        `<img
          src="${event.target.dataset.source}"
          alt="${event.target.alt}"
        />`,
    );
    bigImg.show();
    basicLightboxEl = document.querySelector('.basicLightbox');
    document.addEventListener('keydown', onEscBtnClick);
};
const onEscBtnClick = (event) => {
    if (event.code === 'Escape' && basicLightboxEl.classList.contains('basicLightbox--visible')) {
        bigImg.close();
    }
    document.removeEventListener('keydown', onEscBtnClick);
}