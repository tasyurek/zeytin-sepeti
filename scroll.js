$(document).ready(() => {
  let //
    landing = 5,
    offset = 250,
    duration = 500;

  $(window).scroll(() => {
    if ($(window).scrollTop() < landing) {
      $("#up-to-top").css("bottom", "-8rem");
    } else {
      $("#up-to-top").css("bottom", "0px");
    }

    if ($(this).scrollTop() > offset) {
      $(".up-arrow").fadeIn(duration);
    } else {
      $(".up-arrow").fadeOut(duration);
    }
  });
});
