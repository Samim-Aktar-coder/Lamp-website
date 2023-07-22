//!============= TOGGLE NAV MENU =============
let menuOpenBtn = document.getElementById('menu-open');
let menuCloseBtn = document.getElementById('menu-close');
let navMenu = document.getElementById('nav-menu');
let navLinks = document.querySelectorAll('.nav__link');

menuOpenBtn.addEventListener('click', () => {
    navMenu.classList.add('show');
});
menuCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

//!========== SCROLL HEADER ===========
let pageY = window.scrollY;


function scrollHeader() {
    let navbar = document.querySelector('.navbar');
    let backToTop = document.querySelector('.back-to-top');
    pageY = window.scrollY;

    if (pageY > 50) {
        navbar.classList.add('scroll-navbar');
    } else {
        navbar.classList.remove('scroll-navbar');
    }
    if (pageY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}


window.addEventListener('scroll', scrollHeader);

//!============== SCROLL ACTIVE ============
let sections = document.querySelectorAll('section[id]');

function scrollActive() {
    pageY = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 50;
        let sectionHeight = section.offsetHeight;
        let id = section.getAttribute('id');

        if (pageY > sectionTop && pageY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + id + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

//!=============== SWIPER JS ==============
let popularSwiper = new Swiper(".popular__content", {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            centeredSlides: false,
            loop: false,
        }
    }
});

//!============== CHOOSE ==========
let questions = document.querySelectorAll('.question');

function removeAllOpen() {
    questions.forEach(question => {
        question.classList.remove('open');
    });
}

questions.forEach(question => {
    question.addEventListener('click', () => {
        if (question.classList.contains('open')) {
            question.classList.remove('open');
        } else {
            removeAllOpen();
            question.classList.add('open');
        }
    });
});

//!========== TOGGLE THEME ===========

let themeButton = document.querySelector('#theme-toggle');
const darkTheme = 'dark-theme';
const darkIcon = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkIcon);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(darkIcon);


    localStorage.setItem('selected-theme', getCurrentTheme());
});


//!========== SCROLL REVEAL ===========

// let sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2500,
//     dealy: 400,
//     // reset: true
// });


// sr.reveal(`.home .section__img,.popular,.products,.newsletter .img__container`);
// sr.reveal(`.home .section__info,.newsletter .section__info`, { origin: 'bottom' });
// sr.reveal(`.choose .section__img,.latest .section__img,.footer__logo`, { origin: 'left' });
// sr.reveal(`.choose .section__info,.latest .section__info,.footer__content`, { origin: 'right' });
// sr.reveal(`.product__item`, { interval: 100 })

