const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("#form-button");
const messageContainer = document.querySelector("#success-message");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
  if (checkLength(fullName.value, 1) && validateEmail(email.value) && messageLength(message.value, 25, 150)) {
    button.disabled = false;
  } else {
    messageContainer.style.display = "none";
    messageContainer.innerHTML = "";
    button.disabled = true;
  }
}

fullName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

function submitForm(event) {
  event.preventDefault();
  // send message
  messageContainer.style.display = "block";
  messageContainer.innerHTML = `<div class="message">Your message has been sent</div>`;
  // clear inputs
  form.reset();
}

button.addEventListener("click", submitForm);

// validation
function messageLength(value, minLen, maxLen) {
  if (value.trim().length >= minLen && value.trim().length <= maxLen) {
    messageError.style.display = "none";
    return true;
  } else {
    messageError.style.display = "block";
    return false;
  }
}

function checkLength(value, len) {
  if (value.trim().length >= len) {
    nameError.style.display = "none";
    return true;
  } else {
    nameError.style.display = "block";
    return false;
  }
}

// email validation
function validateEmail(email) {
  const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const patternMatches = regEX.test(email);
  if (patternMatches) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  return patternMatches;
}
