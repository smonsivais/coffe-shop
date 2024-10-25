const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar-menu')
const navlogo = document.querySelector('#navbar-logo')


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu)