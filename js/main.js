const menu = document.querySelector('#menu');
const nav = document.querySelector('.main-navigation');
menu.addEventListener('click', function () {
    menu.checked ? nav.style.top = '-40px' : nav.style.top = '-500px';
});
