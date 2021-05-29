// declare containers & elements
const form = document.querySelector(".container__form");
const submitButton = document.querySelector(".container__btn");
const loginError = document.querySelector(".container__error");

// Validate input values
// check if input larger or equal to minLength of 'x'
function checkLength(input, minLen) {
  console.log(input);
  if (input.value.trim().length >= minLen) {
    return true;
  } else {
    return false;
  }
}

const formInputs = () => [form["username"], form["password"]];

// Self explanatory? "if" inputName = firstName run case "firstName": return boolean ? true : false.
function isInputValid(inputName) {
  console.log(inputName);
  if (inputName === "username") {
    return checkLength(form["username"], 1);
  }
  if (inputName === "password") {
    return checkLength(form["password"], 1);
  }
  return false;
}

// Function connected from event listener, to check for input changes. Then check if its valid, then apply respsctive styling
function inputCheckValid(el) {
  const input = el.target.name;
  if (!isInputValid(input)) {
    return false;
  }
  if (isInputValid(input)) {
    return true;
  }
}

// 'Submit' (button click) form part of the validation

// If this is passed, form is valid.
function validForm() {
  const [username, password] = formInputs();
  const isInputValidArr = [checkLength(username, 1), checkLength(password, 1)];

  // if n (in this case, the array objects) === true, it will return true, otherwise no return.
  function isTrue(n) {
    return n === true;
  }

  // every object in the array gets passed through the 'isTrue' function, return boolean ? true:false
  const isFormValid = isInputValidArr.every(isTrue);
  return isFormValid;
}

// function check every input through a functon of if statements if it's valid.
function submitCheckAll() {
  formInputs().forEach(function (input) {
    isInputValid(input.name) ? true : (loginError.style.display = "block");
  });
}

// on button click, check if form is valid, it form isn't valid, check all inputs
// else clear the form & display a success message
async function handleSubmit() {
  if (!validForm()) {
    submitCheckAll();
  } else {
    location.href = `account.html?u=${form["username"].value}&p=${form["password"].value}`;
  }
}

function sendError(error) {
  submitButton.innerHTML = "error";
  submitButton.disabled = true;
  setTimeout(resetButton, 7000);
  // statusContainer.innerHTML = buildContactError(error);
  // statusContainer.classList.add("error");
}

function resetButton() {
  submitButton.disabled = false;
  submitButton.innerHTML = "Send";
}

// submit form event listener
submitButton.addEventListener("click", handleSubmit);
