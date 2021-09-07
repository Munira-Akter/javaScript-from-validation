let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let password_confirmation = document.getElementById("password_confirmation");
let email = document.getElementById("email");

// This funcion will exicute for success btn
let showSuccess = (input) => {
    let form_control = input.parentElement;
    form_control.className = "form-control success";
};

// This funcion will exicute for danger btn
let showError = (input, msg) => {
    let form_control = input.parentElement;
    form_control.className = "form-control error";
    let small = form_control.querySelector("small");
    small.innerText = msg;
};

// This funcion will exicute for check empty value
let checkEmpty = (inputarry) => {
    inputarry.map((input) => {
        if (input.value === "") {
            showError(input, `${getField(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
};

// This funcion will exicute for check name and password length
let checkLength = (input, min, max) => {
    if (input.value.trim().length < min || input.value.trim().length > max) {
        showError(
            input,
            `${getField(
        input
      )} must be at least ${min} and max ${max} charecters long`
        );
    } else {
        showSuccess(input);
    }
};

// This funcion will exicute for check password confirmation
let passCheck = (input1, input2) => {
    if (input1.vakue != input2.vallue) {
        showError(input2, `${getField(input2)} do not match`);
    } else {
        showSuccess(input2);
    }
};

// Check email is valid
function checkEmail(input) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// This funcion will exicute for get input fields name
let getField = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// This funcion will exicute whene form is submit

form.onclick = (e) => {
    e.preventDefault();
    checkEmpty([username, email, password, password_confirmation]);
    checkLength(username, 3, 7);
    checkLength(password, 3, 7);
    passCheck(password, password_confirmation);
    checkEmail(email);
};