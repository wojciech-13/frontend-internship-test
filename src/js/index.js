/* Here goes your JS code */
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.closeBtn');

function toggleClass() {
    popup.classList.toggle('show');
}

button.addEventListener('click', toggleClass);
closeBtn.addEventListener('click', toggleClass);