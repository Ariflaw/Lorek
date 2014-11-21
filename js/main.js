/*=============================
=            Portofolio          =
=============================*/

$('.main-portofolio').slick({
    // infinite: true,
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



/*=============================
=            Client            =
=============================*/

$('.main-testimonial').slick({
    // infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
});
