const navMenu = document.getElementById('nav-menu')
    navIconGrid = document.getElementById('icon-grid')
    navIconClose = document.getElementById('icon-close')


if(navIconGrid){
    navIconGrid.addEventListener('click' , () => {
        navMenu.classList.add('show-menu')
    })
}

if(navIconClose){
    navIconClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/**
 * REMOVE EVERY TIME YOU CLICK IN A ROW TITLE
 */
const navLink = document.querySelectorAll('.nav__list__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/**
 * Cambiar el header a otrom color all hacer scroll
 */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }
    else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader)