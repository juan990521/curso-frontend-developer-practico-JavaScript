const li = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const iconHamburguesa = document.querySelector('.menu');

li.addEventListener('click', toggleDesktopMenu);
iconHamburguesa.addEventListener('click', toogleMobileMenu);

function toggleDesktopMenu(){
        menu.classList.toggle('inactive');

}

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}