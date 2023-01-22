$(function () {
    $('.review__slider').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        draggable: false,
        waitForAnimate: true,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                },
            }
    ]
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


    jQuery(document).ready(function($){
        $(".blog__btn").click(function(e){
        e.preventDefault()
          $(".blog__page-item:hidden").slice(0,3).fadeIn();
          if ($(".blog__page-item:hidden").length < 1) $(this).fadeOut();
        })
      })



      $(".header__nav-list a, .footer__list-link, .footer__logo").on("click", function (event) {
        event.preventDefault()
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 900)
    });



    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__nav-list').hasClass('header__nav-list--open') == false){
            $('.burger').addClass('burger--follow')
        }
        else{
            $('.burger').removeClass('burger--follow')
        }
    }, 0);
    $('.overlay, .burger, .header__nav-list').on('click', function(e){
        e.preventDefault()
        $('.header__nav-list').toggleClass('header__nav-list--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('burger--close')
        })


        $('.footer__title--slide').on('click', function(e){
            $(this).next().slideToggle()
        })
})

