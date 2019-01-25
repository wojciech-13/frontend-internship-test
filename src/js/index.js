/* Here goes your JS code */
const clickMeBtn = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.closeBtn');
const form = document.querySelector('.form');
const successMessage = document.querySelector('.successMessage');
const error = document.querySelector('.error');

function showPopup() {
    popup.classList.toggle('show');
    clickMeBtn.classList.toggle('hide');
}
function closePopup() {
    popup.classList.toggle('show');
    clickMeBtn.classList.toggle('hide');
}


function afterSubmit(e){
    const isCheckboxValid = this.checkbox.checked;
    const isPasswordValid = this.password.value;
    const isEmailValid = this.email.value;

    /* Form Validation */
    e.preventDefault();
    if(this.email.value === "" || this.password.value === "" || !this.checkbox.checked){
        if(!this.checkbox.checked){
            error.innerHTML = ('You must agree to the terms');
        }
        if(this.password.value === ""){
            error.innerHTML = ('Password field can not be empty');
        }
        if(this.email.value === ""){
            error.innerHTML = 'E-mail field can not be empty';
        }
    }
    /* */

    if(isCheckboxValid && isPasswordValid && isEmailValid){
        error.innerHTML = "";
        setTimeout(function(){
            popup.classList.remove('show');
            successMessage.classList.add('show');
        },3000)
    }
}

clickMeBtn.addEventListener('click', showPopup);
closeBtn.addEventListener('click', closePopup);

form.addEventListener('submit', afterSubmit);
