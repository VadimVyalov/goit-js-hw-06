const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const buttonColorChangeClick = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonColorChangeClick.addEventListener("click", () => {
  //! ======= Варіант 1 >>>>>>>>>>>>
  // const newColor = getRandomHexColor();
  // document.body.style.backgroundColor = newColor;
  // spanColor.textContent = newColor;
  //! ======= Варіант 1 <<<<<<<<<<<<

  //! ======= Варіант 2 >>>>>>>>>>>>
  spanColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = spanColor.textContent;
  //! ======= Варіант 2 <<<<<<<<<<<<
});
