
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
        }, 300);
    });
    $("nav img").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
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


    // init controller
    var controller = new ScrollMagic.Controller({ addIndicators: true });

    //// create a scene
    var scene = new ScrollMagic.Scene({
        duration: 350,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
        .setPin(".ticket-card", { pushFollowers: true }) // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller
    scene.on("start", function (event) {
        $('.ticket-scanner span.light').css('background', 'red');
    });

    scene.on("end", function (event) {
        var count = $('.animation-thingy .digits').html();
        $('.ticket-scanner span.light').css('background', 'green');
        var int = parseInt(count);
        console.log(int);
        $('.animation-thingy .digits').html(int + 1);
        this.remove();

    });
    $('.ticket-card').on('click', function () {
        $(this).parent().css('transition', '.3s');
        scene.progress(1);
        scene.remove();
    })
 
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