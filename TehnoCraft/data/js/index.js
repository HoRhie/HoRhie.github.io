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

function toggleClasses() {
    let headerBurgerMenu = $('.header-menu'),
        headerBurger =  $('.header-burger');
    headerBurgerMenu.toggleClass('header-menu_active');
    headerBurger.toggleClass('header-burger_active');
    $('body').toggleClass('scroll_lock');
}

function burgerMenu(className) {
    $(className).on('click', function(e) {
        e.preventDefault();
        toggleClasses();
    });
    $('.overlay').on('click', function(e) {
        e.preventDefault();
        toggleClasses();
    });
}

languageSwitch();
initMainSlider();
burgerMenu('.header-burger');