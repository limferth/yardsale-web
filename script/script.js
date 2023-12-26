const navEmail = document.querySelector('.nav-container-right__email');
const desktopMenu = document.querySelector('.desktop-menu');


const burgerMenu = document.querySelector('.nav-container-imagen');
const mobileMenu = document.querySelector('.mobile-menu')


navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
}