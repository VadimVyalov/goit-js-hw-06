const targetInput = document.querySelector("#name-input");
const targetSpan = document.querySelector("#name-output");

targetInput.addEventListener("input", (event) => {
  targetSpan.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});
