window.onload = function() {
  var button = document.querySelector('.main-nav__button');
  button.onclick = function() {
    var menu = document.querySelector('.main-nav');
    menu.classList.toggle('main-nav--active');
    // var wrapper = menu.previousElementSibling;
    // wrapper.style.borderBottom  = '2px solid #010101';
  };
};
