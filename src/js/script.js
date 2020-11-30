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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});