var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs')
navMain.classList.remove('main-nav--opened')
navMain.classList.add('main-nav--closed')
navToggle.addEventListener('click', function() {
navMain.classList.toggle('main-nav--opened')
navMain.classList.toggle('main-nav--closed')
});
