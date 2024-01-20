let htmlNoScroll = document.documentElement;
let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.burger');
let links = document.querySelectorAll('.list__link');
let burgerLine = document.querySelectorAll('.burger__line');

// Open-Сlose burger
burger.addEventListener('click', (e) => {
  if (e.currentTarget.className === 'burger') {
    htmlNoScroll.classList.toggle('html-noscroll');
    navbar.classList.toggle('navbar-active');
    burgerLine.forEach((e) => {
      e.classList.toggle('burger-active');
    });
  }
});

// Сlose by link
links.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.className === 'list__link') {
      htmlNoScroll.classList.remove('html-noscroll');
      navbar.classList.remove('navbar-active');
      burgerLine.forEach((e) => {
        e.classList.remove('burger-active');
      });
      console.log('Поздравляю! Ты нажал на сылку :)');
    }
  });
});

// suspend event function
const debounce = (func, ms) => {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, ms);
  };
};

// window resolution events
window.addEventListener('resize', debounce(resize, 500));

// function that closes the menu
function resize() {
  if (htmlNoScroll.offsetWidth >= 769) {
    htmlNoScroll.classList.remove('html-noscroll');
    navbar.classList.remove('navbar-active');
    burgerLine.forEach((e) => {
      e.classList.remove('burger-active');
    });
  }
}
