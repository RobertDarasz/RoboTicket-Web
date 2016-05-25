
$(document).ready(function () {

    $(window).on('load scroll resize', function () {

        if ($(window).scrollTop() >= $(window).height()) {

            $('header').addClass("menuOnTop");

        } else {
            $('header').removeClass("menuOnTop");

        }
                 
    });
    
    $('main').on('swipeleft click', function (e) {
        if ($('#menuTrigger').prop('checked')) {
            $('#menuTrigger').prop('checked', false);
        }

    });

    $('main').on('swiperight', function (e) {
        if (!$('#menuTrigger').prop('checked')) {
            $('#menuTrigger').prop('checked', true);
        }

    });

    $("nav ul li a").on('click', function () {
        var href = $(this).data('goto');

        $('html, body').animate({
            scrollTop: $(href).offset().top - (href != ".slide-2" ? 70 : 0)
        }, 1000);
    });
    $("nav img").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).stellar({
        scrollProperty: 'scroll',
        responsive: true,
        positionProperty: 'transform',
        horizontalScrolling: false,
        verticalScrolling: true,
        horizontalOffset: 0,
        verticalOffset: 0,

    });

    wow = new WOW({
        boxClass: 'animate',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });
    wow.init();
    //$("header ul li").each(function () {
    //    $(this).width($(this).children().innerWidth());
    //});
    //$("header ul li a").mouseenter(function () {
    //    $(this).width($(this).parent().innerWidth());
    //    $(this).addClass("active");
    //});
    //$("header ul li a").mouseleave(function () {
    //    $(this).removeClass("active");
    //    $(this).addClass("no-padding");
    //});
            
});