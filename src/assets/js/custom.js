const buttonMenu = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--close');
    menu.classList.toggle('menu--open');
});