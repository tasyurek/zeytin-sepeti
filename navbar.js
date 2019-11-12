$(document).ready(() => {
  let menuOpened = $("#hamburger").hasClass("collapsed");
  let hamburgerIcon = $("#hamburger-icon");

  let //
    offset = 300;

  $(window).scroll(() => {
    console.log();
    if (
      $(window).scrollTop() > offset &&
      $(".navbar-collapse").hasClass("show")
    ) {
      $(".navbar-collapse").removeClass("show");
      toggleHamburgerMenu();
    }
  });

  $("#hamburger").click(() => {
    toggleHamburgerMenu();
  });

  const toggleHamburgerMenu = () => {
    hamburgerIcon.toggleClass("fa-bars");
    hamburgerIcon.toggleClass("fa-times");
  };
});
