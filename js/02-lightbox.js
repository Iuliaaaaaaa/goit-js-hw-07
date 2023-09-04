import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const placeElementRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
.map(
    (item) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>`
)
.join("");

placeElementRef.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });