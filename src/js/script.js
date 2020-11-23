$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoHeight: false,
            navText: ['<img src="../icons/arrow_left.png" alt="left">', '<img src="../icons/arrow_right.png" alt="right">'],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                768: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1,
                    nav: true
                }
            }
        });
  });