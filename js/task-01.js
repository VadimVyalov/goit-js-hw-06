//! ======= Варіант 1 >>>>>>>>>>>>

const categoryList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("h2 + ul > li").length}`);
});

//! ======= Варіант 1 <<<<<<<<<<<<

//! ======= Варіант 2 >>>>>>>>>>>>

// const categories = document.querySelector("#categories");
// const elements = [...categories.children];

// console.log(`Number of categories: ${categories.childElementCount}`);

// elements.forEach((element) => {
//   console.log(`Category: ${element.firstElementChild.textContent}`);
//   console.log(`Elements: ${element.lastElementChild.childElementCount}`);
// });
//! ======= Варіант 2 <<<<<<<<<<<<
