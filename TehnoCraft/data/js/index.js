let headerBurgerMenu = $('.header-menu'),
    headerBurger =  $('.header-burger');

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

function toggleOverlay() {    
    headerBurgerMenu.toggleClass('header-menu_active');
    headerBurger.toggleClass('header-burger_active');
    $('body').toggleClass('scroll_lock');
}

function burgerMenu(className) {
    $(className).on('click', function(e) {
        e.preventDefault();
        toggleOverlay();
    });
    $('.overlay').on('click', function(e) {
        e.preventDefault();
        toggleOverlay();
    });
}

function turnOffOverlay(className) {
    $(className).not('.language').on('click', function(e) {
        headerBurgerMenu.removeClass('header-menu_active');
        headerBurger.removeClass('header-burger_active');
        $('body').removeClass('scroll_lock');
    });
}

languageSwitch();
initMainSlider();
burgerMenu('.header-burger');
turnOffOverlay('.header-menu__item');