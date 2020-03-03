'use strict';

(function () {
let burgerButton = document.querySelector('.burger-button');
let navigationElement = document.querySelector('.site-header__navigation');

if (burgerButton) {
  burgerButton.classList.remove('burger-button--no-js');
  burgerButton.classList.remove('burger-button--opened');
  burgerButton.classList.add('burger-button--closed');

  burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('burger-button--opened');
    burgerButton.classList.toggle('burger-button--closed');
    navigationElement.classList.toggle('site-header__navigation--opened');
    navigationElement.classList.toggle('site-header__navigation--closed');
  });
}

if (navigationElement) {
  navigationElement.classList.remove('site-header__navigation--no-js');
  navigationElement.classList.remove('site-header__navigation--opened');
  navigationElement.classList.add('site-header__navigation--closed');
}
})();
