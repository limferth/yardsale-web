const navEmail = document.querySelector('.nav-container-right__email');
const desktopMenu = document.querySelector('.desktop-menu')


navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')
}