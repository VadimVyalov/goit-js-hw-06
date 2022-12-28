const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  spanValue: document.querySelector("#value"),
};

let counterValue = 0; //? Нащо, тому що в ТЗ

refs.decrement.addEventListener("click", () => {
  //   spanValue.textContent = Number(spanValue.textContent) - 1;

  counterValue -= 1;

  counterValue === 0
    ? (refs.spanValue.style.color = "#000000")
    : counterValue > 0
    ? (refs.spanValue.style.color = "#FF0000")
    : (refs.spanValue.style.color = "#0000FF");

  refs.spanValue.textContent = counterValue;
});

refs.increment.addEventListener("click", () => {
  //   spanValue.textContent = Number(spanValue.textContent) + 1;
  counterValue += 1;

  counterValue === 0
    ? (refs.spanValue.style.color = "#000000")
    : counterValue > 0
    ? (refs.spanValue.style.color = "#FF0000")
    : (refs.spanValue.style.color = "#0000FF");

  refs.spanValue.textContent = counterValue;
});
