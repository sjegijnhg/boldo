$(function () {
    $('.review__slider').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        draggable: false,
        waitForAnimate: true,
    });

    $('.review__slider-prev').on('click', function(e){
        e.preventDefault()
        $('.review__slider').slick('slickPrev')
    })

    $('.review__slider-next').on('click', function(e){
        e.preventDefault()
        $('.review__slider').slick('slickNext')
    })



    $('.program__accordeon-link').on('click', function(e){
        e.preventDefault()
        if ($(this).hasClass('program__accordeon-link--active')) {
            $(this).removeClass('program__accordeon-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else{
            $('.program__accordeon-link').removeClass('program__accordeon-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__accordeon-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })
})

