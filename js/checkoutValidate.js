// declare containers & elements
const form = document.querySelector(".checkout__form");
const submitButton = document.querySelector(".checkout__btn");
const statusContainer = document.querySelector("#statusContainer");

// Validate input values

// Regex to check if the email is valid, returns ? true : false
function validateEmail(email) {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const patternMatches = regEx.test(email.value);
  return patternMatches;
}

// check if input larger or equal to minLength of 'x'
function checkLength(input, minLen) {
  if (input.value.trim().length >= minLen) {
    return true;
  } else {
    return false;
  }
}

// DOM form input elements, credits to Kasper for teaching me this
const formInputs = () => [
  form["fullName"],
  form["email"],
  form["adr"],
  form["country"],
  form["state"],
  form["zip"],
  form["paymentOption"],
  form["cardName"],
  form["cardNumber"],
  form["cardExpm"],
  form["cardExpy"],
  form["cardCcv"],
];

// apply error styling to item(s) passed in as through 'input'. uses (input.target) = false if it's an eventlistener, and (input.target) = true if it's not.
// because the eventListener does not have a .target value
function errorStyling(input) {
  const target = input.target ? input.composedPath()[0] : form[input];
  target.style.borderBottom = "2px solid var(--warn)";
  target.style.marginBottom = "0";
  target.nextElementSibling.style.display = "block";
}

// apply success styling to item(s)
function successStyling(input) {
  const target = input.target ? input.composedPath()[0] : form[input];
  target.style.borderBottom = "2px solid var(--success)";
  target.nextElementSibling.style.display = "none";
}

// Self explanatory? "if" inputName = firstName run case "firstName": return boolean ? true : false.
function isInputValid(inputName) {
  if (inputName === "fullName") {
    return checkLength(fullName, 1);
  }
  if (inputName === "email") {
    return validateEmail(email);
  }
  if (inputName === "adr") {
    return checkLength(adr, 1);
  }
  if (inputName === "country") {
    return checkLength(country, 1);
  }
  if (inputName === "state") {
    return checkLength(state, 1);
  }
  if (inputName === "zip") {
    return checkLength(zip, 1);
  }
  if (inputName === "paymentOption") {
    return form["paymentOption"].value ? true : false;
  }
  if (inputName === "cardName") {
    return checkLength(cardName, 1);
  }
  if (inputName === "cardNumber") {
    return checkLength(cardNumber, 1);
  }
  if (inputName === "cardExpm") {
    return checkLength(cardExpm, 1);
  }
  if (inputName === "cardExpy") {
    return checkLength(cardExpy, 1);
  }
  if (inputName === "cardCcv") {
    return checkLength(adr, 1);
  }
  return false;
}

// Function connected from event listener, to check for input changes. Then check if its valid, then apply respsctive styling
function inputCheckValid(el) {
  document.querySelector(".checkout__failed").removeAttribute("style");

  const input = el.target.name;
  if (!isInputValid(input)) {
    errorStyling(el);
  }
  if (isInputValid(input)) {
    successStyling(el);
  }
}

// add input event listener
formInputs().forEach((element) => {
  element.addEventListener("input", inputCheckValid);
  statusContainer.removeAttribute("style");
});

// 'Submit' (button click) form part of the validation

// If this is passed, form is valid.
function validForm() {
  const [fullName, email, adr, country, state, zip, cardName, cardNumber, cardExpm, cardExpy, cardCcv] = formInputs();
  const isInputValidArr = [
    checkLength(fullName, 1),
    validateEmail(email),
    checkLength(adr, 1),
    checkLength(country, 1),
    checkLength(state, 1),
    checkLength(zip, 1),
    checkLength(cardName, 1),
    checkLength(cardNumber, 1),
    checkLength(cardExpm, 1),
    checkLength(cardExpy, 1),
    checkLength(cardCcv, 1),
  ];

  // if n (in this case, the array objects) === true, it will return true, otherwise no return.
  function isTrue(n) {
    return n === true;
  }

  // every object in the array gets passed through the 'isTrue' function, return boolean ? true:false
  const isFormValid = isInputValidArr.every(isTrue);
  return isFormValid;
}

// function check every input through a functon of if statements if it's valid. If this returns true, apply successStyling, else if return = false, apply errorStyling.
function submitCheckAll() {
  formInputs().forEach(function (input) {
    isInputValid(input.name) ? successStyling(input.name) : errorStyling(input.name);
  });
}

// on button click, check if form is valid, it form isn't valid, check all inputs & apply respective styling to them induvidually.
// else clear the form & display a success message
async function handleSubmit() {
  statusContainer.removeAttribute("style");
  statusContainer.innerHTML = "";
  submitButton.innerHTML = "Processing...";

  if (!validForm()) {
    sendError();
    submitCheckAll();
    form.removeAttribute("style");
  } else {
    resetButton();
    form.reset();
    statusContainer.style.display = "block";
    statusContainer.innerHTML = `Order complete! Check your email!`;
    formInputs().forEach((input) => {
      input.removeAttribute("style");
    });
    window.scrollTo({ top: 0 });
  }
}

function sendError(error) {
  submitButton.innerHTML = "error";
  submitButton.disabled = true;
  setTimeout(resetButton, 2000);
  document.querySelector(".checkout__failed").style.display = "block";
}

function resetButton() {
  submitButton.disabled = false;
  submitButton.innerHTML = "Checkout";
}

// submit form event listener
submitButton.addEventListener("click", handleSubmit);
