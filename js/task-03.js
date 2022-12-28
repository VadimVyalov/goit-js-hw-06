const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//! ======= Варіант 1 >>>>>>>>>>>>

// const makeGallery = (gallery) =>
//   gallery
//     .map(
//       ({ url, alt }) => `<li class="gallery__item">
//                         <img src="${url}" alt="${alt}" width="300" height="178">
//                          </li>`
//     )
//     .join("");

// const gallery = document.querySelector(".gallery");
// const newGallery = makeGallery(images);

// gallery.insertAdjacentHTML("beforeend", newGallery);

//! ======= Варіант 1 <<<<<<<<<<<<

//! ======= Варіант 2 >>>>>>>>>>>>

const makeGalleryEl = ({ url, alt }) =>
  `
  <li class="gallery__item"> 
    <img src="${url}" alt="${alt}" width="300" height="178">
  </li>
  `;

const makeGallery = (gallery) => gallery.map(makeGalleryEl).join("");

const gallery = document.querySelector(".gallery");
const newGallery = makeGallery(images);
gallery.insertAdjacentHTML("beforeend", newGallery);

//! ======= Варіант 2 <<<<<<<<<<<<
