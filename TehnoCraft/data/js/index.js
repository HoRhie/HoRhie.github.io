function languageSwitch() {
    $(".language__item").on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
}

function initMainSlider() {
    $('.main-slider').slick({
        dots: true,
        infinite: false,
        prevArrow: "<span class='slick-prev'><span></span></span>",
        nextArrow: "<span class='slick-next'><span></span></span>",
        responsive: [
            {
              breakpoint: 426,
              settings: {
                arrows: false
              }
            }
        ]
    });
}

function initMobileSlider() {
    $('.brands').slick({
        dots: false,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 650,
                settings: 'unslick'
            }
      ]
    })
}

languageSwitch();
initMainSlider();
// initMobileSlider();