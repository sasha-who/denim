'use strict';

(function () {
let filtersFormElement = document.querySelector('.filters');
let filtersToggleList = filtersFormElement.querySelectorAll('.filters__toggle');
let filtersCloseElement = filtersFormElement.querySelector('.filters__close');

let toggleAllClasses = function (item) {
  item.classList.toggle('filters__toggle--opened');
  item.nextElementSibling.classList.toggle('filters__content--opened');
  item.lastElementChild.classList.toggle('filters__arrow-icon--up');
};

let closeAllFilters = function () {
  let openedFilters = filtersFormElement.querySelectorAll('.filters__toggle--opened');

  openedFilters.forEach(function (item) {
    toggleAllClasses(item);
  });
};

filtersToggleList.forEach(function (item) {
  item.addEventListener('click', function () {
    toggleAllClasses(item);
  });
});

filtersCloseElement.addEventListener('click', function () {
  closeAllFilters();
  filtersFormElement.reset();
});
})();
