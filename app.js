const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
//display the mobile menu
const mobileMenu=()=>
{
    menu.classList.toggle('is-active');
    menu.classList.toggle('active');
    
}
menu.addEventListener('click',mobileMenu);