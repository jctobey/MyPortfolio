$(document).ready(function() {
  var alterClass = function() {
    var ww = $(window).width();
    if (ww <= 1000) {
      $(".portfolio-header").addClass("is-casting-shadow is-compact");
      console.log("fired off");
    } else if (ww > 1000) {
      $(".portfolio-header").removeClass("is-casting-shadow is-compact");
    }
  };
  $(window).resize(function() {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
  console.log(document.body.clientWidth);
});
