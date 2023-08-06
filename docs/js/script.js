function testWebp(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebp(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});



//------- Бургер -------


//Неправильно

// let header__burger = document.querySelector('.header__burger');

let header__burger = document.querySelectorAll('.header__burger,.header__link');

let header__menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

// header__burger.onclick = function () {
//     header__burger.classList.toggle('active');
//     header__menu.classList.toggle('active');
//     back.classList.toggle('lock');
// }

header__burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header__menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}



// let header__burger = document.querySelectorAll('.header__burger,.header__link');
// let header_menu = document.querySelector('.header__menu');

// header__burger.forEach(function (item) {
//     item.onclick = function () {
//         item.classList.toggle('active');
//         header_menu.classList.toggle('active');
//         back.classList.toggle('lock');
//     }
// });


//------- Бургер -------//




// document.querySelector(window).scroll(function () {
//     document.querySelector('header').classList.toggle('scroll', document.querySelector(this).scrollTop > 100);
// });

// const nav = document.querySelector(".navigation");
// const window = document.defaultView;

// //Header with shadow on scroll
// window.scroll(function () {
//     var scroll = window.pageYOffset;
//     if (scroll > 0) {
//         console.log(1);
//         nav.addClass("scroll");
//         console.log(12);
//     }
//     else {
//         console.log(13);
//         nav.removeClass("scroll");
//         console.log(14);
//     }
// });






//-----Slider-----

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;
const container = document.querySelector('.testimonials-slider-container');
const track = document.querySelector('.testimonials-slider-track');
const btnPrev = document.querySelector('.testimonials-slider-buttons__btn-prev');
const btnNext = document.querySelector('.testimonials-slider-buttons__btn-next');
const items = document.querySelectorAll('.testimonials-slider-item');//testimonials-slider-item
const itemsCount = items.length;
const itemWidth = (container.clientWidth + 1) / slidesToShow; //Bag with line from next item (container.clientWidth "+1" )
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

//-----Slider-----//

