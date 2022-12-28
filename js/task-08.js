const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поляповинні бути заповнені");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
});
