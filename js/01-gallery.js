import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryImg = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryImg);

gallery.addEventListener("click", onClickImege);

function onClickImege(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => window.addEventListener("keydown", onCloseModal),
      onClose: (instance) =>
        window.removeEventListener("keydown", onCloseModal),
    }
  );
  instance.show();

  function onCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
