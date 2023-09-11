let dropdown = document.querySelector('.dropdown');
let dropdownButton = document.querySelector('.hamburger_menu');

dropdownButton.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})

