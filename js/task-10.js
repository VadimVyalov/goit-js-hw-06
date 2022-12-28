const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const refs = {
  inputAmount: document.querySelector("#controls>input"),
  buttonCreateClick: document.querySelector("[data-create]"),
  buttonDestroyClick: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

//! ======= Варіант 1 >>>>>>>>>>>> для append
const makeBox = (sizeBox) => {
  const newBox = document.createElement("div");
  newBox.style.height = `${sizeBox}px`;
  newBox.style.width = `${sizeBox}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  return newBox;
};
//! ======= Варіант 1 <<<<<<<<<<<<

//! ======= Варіант 2 >>>>>>>>>>>> для insertAdjacentHTML

// const makeBox = (sizeBox) => {
//   const bgc = getRandomHexColor();
//   return `<div style=
//   "height: ${sizeBox}px;
//   width: ${sizeBox}px;
//   background-color: ${bgc};">
//   </div> `;
// };
//! ======= Варіант 2 <<<<<<<<<<<<

const createBoxes = (amount) => {
  const lastBoxSize = refs.boxesEl.lastElementChild
    ? Number.parseInt(refs.boxesEl.lastElementChild.style.height)
    : 20;

  let boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    boxes.push(makeBox(lastBoxSize + 10 * i));
  }
  return boxes;
};

refs.buttonCreateClick.addEventListener("click", () => {
  let amountBox = refs.inputAmount.value
    ? refs.inputAmount.value
    : confirm("Введи кількість, інакше влеплю 1 ")
    ? 1
    : 0;
  if (!amountBox) return;

  refs.boxesEl.append(...createBoxes(amountBox));
  // refs.boxesEl.insertAdjacentHTML("beforeend", createBoxes(amountBox).join(""));
});

refs.buttonDestroyClick.addEventListener("click", () => {
  refs.boxesEl.innerHTML = "";
});
