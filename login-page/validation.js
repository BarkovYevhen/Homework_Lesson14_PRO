const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const fullNameInput = document.getElementById("full_name");
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const fullNameValue = fullNameInput.value;

  const emailPattern = /^.{5,}@.*\..*$/;
  const phonePattern = /^\+?[0-9()-]{10,13}$/;
  const fullNamePattern = /^([A-ZА-ЯЇЄІ][a-zA-ZА-ЯЇЄІа-яїєі]+[\-\s]?){3,}$/u;

  if (!emailPattern.test(emailValue)) {
    alert("Невірно введений email! Введіть в форматі: example@email.com");
    return;
  }

  if (!phonePattern.test(phoneValue)) {
    alert("Невірно введений номер! ВВедіть в форматі +38(000)1234567");
    return;
  }

  if (!fullNamePattern.test(fullNameValue)) {
    alert("Вкажіть ПІБ повністю!");
    return;
  }

  // Всі поля пройшли валідацію, можна відправити форму
  loginForm.submit();
});
