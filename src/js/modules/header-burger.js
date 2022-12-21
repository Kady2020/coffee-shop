$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.header__body,.logo,.menu,.burger,.menu__link,.menu__icon,.menu__button").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.menu__link,.menu__icon').click(function (event) {
    $(".header,.header__body,.logo,.menu,.burger,.menu__link,.menu__icon,.menu__button").removeClass('active');
    $('body').removeClass('lock');
  });
});
