const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value)){
        success(input)
    }
    else{
        error(input, "Email is not valid")
    }
}

function checkRequired(inputs) {
  inputs.map((input) => {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, 'min size')
    }
    else if(input.value.length > max){
        error(input, 'max size')
    }
    else{
        success(input)
    }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, repassword]);
  checkEmail(email);
  checkLength(username, 7, 15);
});
