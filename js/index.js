document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const menuMobile = document.querySelector('.menu-mobile');

    navbarToggler?.addEventListener('click', function() {
        menuMobile.classList.toggle('open');
    });
});