const targetInput = document.querySelector("#font-size-control");
const targetSpan = document.querySelector("#text");

targetInput.addEventListener("input", (event) => {
  targetSpan.style.fontSize = `${event.currentTarget.value}px`;
});
