// header search form
let search = document.querySelector(".search-form");

document.querySelector('header .search-btn').onclick = () => {
    
    search.classList.toggle('active');
    menu.classList.remove('active');
}

// header navbar
let menu = document.querySelector('header .navbar');

document.querySelector('header .menu-btn').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    menu.classList.remove('active');
}

// home slider

let slides = document.querySelectorAll('.home .slide');
let i = 0;

function next() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;

    slides[i].classList.add('active');
}

function previous() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}