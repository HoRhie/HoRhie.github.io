function languageSwitch() {
    $(".language__item").on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
}

function initSlider() {
    $('.main-slider').slick({
        dots: true,
        infinite: false,
        prevArrow: "<span class='slick-prev'><span></span></span>",
        nextArrow: "<span class='slick-next'><span></span></span>"
    });
}

languageSwitch();
initSlider();