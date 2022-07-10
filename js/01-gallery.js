import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = document.querySelector('.gallery');

const createMarkup = createGalleryImage(galleryItems);

galleryImages.insertAdjacentHTML('beforeend', createMarkup);

galleryImages.addEventListener('click', onGalleryClick);

function createGalleryImage(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>`;
    }).join('');
}

function onGalleryClick(event) {
    event.preventDefault();
    const isGalleryImageEl = event.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
    }
    const originalUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${originalUrl}">`);
    
    instance.show(() => window.addEventListener('keydown', onEscClick));

    function onEscClick(event) {
        if (event.key === 'Escape') {
            instance.close(() => window.removeEventListener('keydown', onEscClick));
            return;
        }
        return;
    // }
}
}