'use strict';

let filtersFormElement = document.querySelector('.filters');
let filtersToggleList = filtersFormElement.querySelectorAll('.filters__toggle');
let filtersCloseElement = filtersFormElement.querySelector('.filters__close');
let filtersContentElement = filtersFormElement.querySelector('.filters__content');

filtersCloseElement.addEventListener('click', function() {
  filtersContentElement.classList.toggle('filters__content--opened');
});

filtersToggleList.forEach(function(item) {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('filters__content--opened');
    item.lastElementChild.classList.toggle('filters__arrow-icon--up');
  });
});
