/* Here goes your JS code */
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.closeBtn');
const form = document.querySelector('.form');

console.log(form);
console.log(form.email);
function toggleClass() {
    popup.classList.toggle('show');
}

function validateForm(e) {
    if(this.email.value === ""){
        e.preventDefault();
        alert('E-mail field can not be empty');
    }
    if(this.password.value === ""){          //?
        e.preventDefault();
        alert('Password field can not be empty');
    }
    if(!this.checkbox.checked){
        e.preventDefault();
        alert('You must agree to the terms and conditions');
    }
}

button.addEventListener('click', toggleClass);
closeBtn.addEventListener('click', toggleClass);

// Form Validation
form.addEventListener('submit', validateForm);
