const targetInput = document.querySelector("#validation-input");

targetInput.addEventListener("blur", (event) => {
  targetInput.classList.add("invalid");
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    targetInput.classList.replace("invalid", "valid");
  }
});
