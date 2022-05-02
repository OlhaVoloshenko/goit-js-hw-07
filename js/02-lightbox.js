import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryImg = createGalerryAtt(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryImg);
//galleryList.addEventListener('click', galleryListModal);

function createGalerryAtt(galleryItems){
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> `;
    }).join('');
};

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250} );
gallery.on('show.simplelightbox', function () {
	// do something…
});