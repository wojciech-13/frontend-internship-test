/* Here goes your JS code */
const clickMeBtn = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('.form');
const successMessage = document.querySelector('.success-message');
const error = document.querySelector('.error');
const checkboxInput = form.querySelector("input[type='checkbox']");
const passwordInput = form.querySelector("input[type='password']");
const emailInput = document.querySelector("input[type='email']")

function showPopup() {
    popup.classList.toggle('show');
    clickMeBtn.classList.toggle('hide');
}
function closePopup() {
    popup.classList.toggle('show');
    clickMeBtn.classList.toggle('hide');
}


function afterSubmit(e){
    const isCheckboxValid = checkboxInput.checked;
    const isPasswordValid = passwordInput.value;
    const isEmailValid = emailInput.value;

    /* Form Validation */
    e.preventDefault();
    if(emailInput.value === "" || passwordInput.value === "" || !checkboxInput.checked){
        if(!checkboxInput.checked){
            error.innerHTML = ('You must agree to the terms');
        }
        if(passwordInput.value === ""){
            error.innerHTML = ('Password field can not be empty');
        }
        if(emailInput.value === ""){
            error.innerHTML = 'E-mail field can not be empty';
        }
    }
    /* */

    if(isCheckboxValid && isPasswordValid && isEmailValid){
        error.innerHTML = "";
        checkboxInput.setAttribute("disabled", true);
        passwordInput.setAttribute("disabled", true);
        emailInput.setAttribute("disabled", true);

        setTimeout(function(){
            popup.classList.remove('show');
            successMessage.classList.add('show');
        },3000)
    }
}

clickMeBtn.addEventListener('click', showPopup);
closeBtn.addEventListener('click', closePopup);

form.addEventListener('submit', afterSubmit);
