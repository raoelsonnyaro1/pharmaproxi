$(document).ready(function () {
  $(".article-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      700: {
        items: 2,
      },
      769: {
        items: 3,
      },
    },
  });
  $(".saviez-vous-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
  });
  $(".pricing-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
  });
});
