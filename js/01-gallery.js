import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryImg = createImgEl(galleryItems);
galleryList.insertAdjacentElement('beforeend', galleryImg);
galleryList.addEventListener('click', galleryListModal);

function createGalerryAtt(galleryItems){
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${description}"
                    alt="${original}"
                />
            </a>
        </div> `;
    }).join('');
}

function galleryListModal(event) {
    event.preventDefault();
    const imgBig = event.target.classlist.contains('gallery__image');

if(!imgBig) {
    return;
}
const imgValue = evt.target;
let parentImg = imgValue.closest('.gallery__image');

parentImg = basicLightbox.create(`
    <img width="1280" height="800" src="${parentImg.dataset.source}">
`).show();

}


