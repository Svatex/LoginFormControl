const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

debugger;

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}



function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, ` ${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  let firstLetter = input.id;
  let newString = firstLetter[0].toUpperCase() + firstLetter.slice(1);
  return newString;
}

function checkLength (input, min, max) {
  if (input.value.length <= min || input.value.length > max ) {
    showError (input, ` ${getFieldName(input)} must be at least ${min} characters long.`);
}}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, ` Email is not valid`);
  }
}

function checkPass (input) {
  if (input.value === password.value) {
    showSuccess(input);
  } else {
    showError(input, ` ${getFieldName(input)} must match`);
  }
};


form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  
  checkRequired([username, email, password, password2]);
  checkLength (username, 3, 20);
  checkLength (password, 6, 20);
  checkEmail (email);
  checkPass (password2);

  
  
});
