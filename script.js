const confirmation = document.getElementById("confirm");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", function (event) {
  if (confirmation.value != password.value) {
    confirmation.setCustomValidity("The passwords don't match");
    confirmation.reportValidity();
  } else {
    confirmation.setCustomValidity("");
  }
});