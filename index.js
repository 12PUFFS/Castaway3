$(function () {
  let header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_nav");
    } else {
      header.removeClass("header_nav");
    }
  });
});
