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

/**
 * FLECHA SUBIR ARRIBA AL BAJAR DE CIERTO HEIGHT EN LA PAGINA
 */
function desplazarArriba(){
    const arriba = document.getElementById("flecha_arriba");

    if(this.scrollY >= 350){
        arriba.classList.add("show-scroll");
    }
    else{
        arriba.classList.remove("show-scroll");
    }
}
window.addEventListener("scroll", desplazarArriba);

/**
 * MENU HAMBURGER CLICKAR EN CADA SECCION Y MOSTRAR LA PARTE CORRESPONDIENTE
 */
const sections = document.querySelectorAll("section[id]");

function desplazamientoActivo() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const links = [...document.querySelectorAll(`.nav__menu a[href="#${sectionId}"]`)];
        links.forEach(link => link.classList.add("active-link"));
      } else {
        const links = [...document.querySelectorAll(`.nav__menu a[href="#${sectionId}"]`)];
        links.forEach(link => link.classList.remove("active-link"));
      }
    });
  
    // Add the active link class to the "INICIO" section link
    if (scrollY < 200) {
      const links = [...document.querySelectorAll(`.nav__menu a[href="#inicio"]`)];
      links.forEach(link => link.classList.add("active-link"));
    } else {
      const links = [...document.querySelectorAll(`.nav__menu a[href="#inicio"]`)];
      links.forEach(link => link.classList.remove("active-link"));
    }
  
    // Add the active link class to the "CONTACTO" section link
    const lastSection = sections[sections.length - 1];
    const lastSectionTop = lastSection.offsetTop - 58;
    const lastSectionHeight = lastSection.offsetHeight;
    const windowHeight = window.innerHeight;
  
    if (scrollY > lastSectionTop - windowHeight / 2 && scrollY <= lastSectionTop + lastSectionHeight) {
      const links = [...document.querySelectorAll(`.nav__menu a[href="#contacto-general"]`)];
      links.forEach(link => link.classList.add("active-link"));
  
      // Remove the active link class from the "Servicios" link when "Contacto" is active
      const serviciosLink = document.querySelector('.nav__menu a[href="#servicios"]');
      serviciosLink.classList.remove('active-link');
    } else {
      const links = [...document.querySelectorAll(`.nav__menu a[href="#contacto-general"]`)];
      links.forEach(link => link.classList.remove("active-link"));
    }
  
    // Add the active link class to the "SERVICIOS" section link
    const penultimateSection = sections[sections.length - 2];
    const penultimateSectionTop = penultimateSection.offsetTop - 58;
    const penultimateSectionHeight = penultimateSection.offsetHeight;
  
    if (scrollY > penultimateSectionTop - windowHeight / 2 && scrollY <= penultimateSectionTop + penultimateSectionHeight) {
      const links = [...document.querySelectorAll(`.nav__menu a[href="#servicios"]`)];
      links.forEach(link => link.classList.add("active-link"));
    } else {
      const links = [...document.querySelectorAll(`.nav__menu a[href="#servicios"]`)];
      links.forEach(link => link.classList.remove("active-link"));
    }
  }

window.addEventListener("scroll", desplazamientoActivo);

