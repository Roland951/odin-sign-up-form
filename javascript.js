const password = document.getElementById("user_password");
const confirmPassWord = document.getElementById("user_password_confirm");
const phoneNumber = document.getElementById("phone_number");
let passwordValue = "";
let confirmPasswordValue = "";
let phoneNumberValue = "";

window.addEventListener("click", () => {
    passwordValue = password.value;
    confirmPasswordValue = confirmPassWord.value;
    phoneNumberValue = phoneNumber.value;

    phoneNumberFiltered = myRegex.exec(phoneNumberValue);

    console.log(phoneNumberValue);
    console.log(phoneNumberFiltered);

    if(passwordValue!= confirmPasswordValue){
        confirmPassWord.style.borderBottomColor = "red";
        confirmPassWord.style.borderRightColor = "red";
        confirmPassWord.setCustomValidity("Passwords do not match");
    
    }
    else{
        confirmPassWord.style.borderBottomColor = "rgb(118, 118, 118)";
        confirmPassWord.style.borderRightColor = "rgb(118, 118, 118)";
        confirmPassWord.setCustomValidity("");
    }
});