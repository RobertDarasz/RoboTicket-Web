
$(document).ready(function () {

    $(window).on('load scroll resize', function () {

        if ($(window).scrollTop() >= ( $(window).height()) - 300  ) {

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
    var controller = new ScrollMagic.Controller({

    });

    //// create a scene
    var ticket = new ScrollMagic.Scene({
        duration: 200,    // the scene should last for a scroll distance of 100px
        triggerElement: ".ticket-card",
        offset: 100
    })
        .setPin(".ticket-card", { pushFollowers: false }) // pins the element for the the scene's duration
        .addIndicators()
        .addTo(controller); // assign the scene to the controller

    ticket.on("start", function (event) {
        $('.ticket-scanner span.light').css('background', 'red');
    });





    var slide2 = new ScrollMagic.Scene({
        triggerElement: ".slide-2",
        triggerHook: "onLeave",
        duration:500

    })
		.setPin(".slide-2 .container")
		.addIndicators({ name: "1 (duration: 300)" }) // add indicators (requires plugin)
        .on("leave", function () {
                
        })
		.addTo(controller);




    var section1Tween = new TimelineMax()

                        .to("#section-1 .panel", 1, { y: "-100%", autoAlpha: 0, ease: Linear.easeNone, delay:3});

    var section1 = new ScrollMagic.Scene({
        triggerElement: "#section-1",
        triggerHook: 0.1,
        offset:0,
        duration: "200%"

    })
    .setPin("#section-1 .pin-container")
    .setTween(section1Tween)
    .setClassToggle("#goto-1", "active")
    .addIndicators({ name: "section slide-1" }) // add indicators (requires plugin)
    .addTo(controller);


    var section2Tween = new TimelineMax()
                        .fromTo("#section-2 h2", 1, { x: "100%", autoAlpha: 0 }, { x: "0%", autoAlpha: 1, ease: Linear.easeNone })
                        .fromTo("#section-2 p", 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Linear.easeNone })
                        .fromTo("#section-2 .features-list", 1, { autoAlpha: 0, y: "20%" }, { autoAlpha: 1, y: "0%", ease: Linear.easeNone, delay:1})
                        .to("#section-2 .panel", 3, { y: "-100%", ease: Linear.easeNone });

    var section2 = new ScrollMagic.Scene({
        triggerElement: "#section-2",
        triggerHook: 0.1,
        offset: 0,
        duration: "200%"

    })
    .setPin("#section-2 .pin-container")
    .setTween(section2Tween)
    .setClassToggle("#goto-2", "active")
    .addIndicators({ name: "section slide-2" }) // add indicators (requires plugin)
    .addTo(controller);

    var section3Tween = new TimelineMax()
                    .fromTo("#section-3 h2", 1, { x: "100%", autoAlpha: 0 }, { x: "0%", autoAlpha: 1, ease: Linear.easeNone })
                    .fromTo("#section-3 p", 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Linear.easeNone })
                    .fromTo("#section-3 .row", 3, { autoAlpha: 0, y: "20%" }, { autoAlpha: 1, y: "0%", ease: Linear.easeNone })

    var section3 = new ScrollMagic.Scene({
        triggerElement: "#section-3",
        triggerHook: 0.1,
        offset: 0,
        duration: "200%"

    })
  .setPin("#section-3 .pin-container")
    .setTween(section3Tween)
    .setClassToggle("#goto-3", "active")
  .addIndicators({ name: "section slide-3" }) // add indicators (requires plugin)
  .addTo(controller);



    // Menu Pins
    var menuDot = new ScrollMagic.Scene({
        triggerElement: ".slide-3",
        triggerHook: 0.1,
        offset: 0,
        duration: "600%"

    })

   .setPin(".slide-3 #leader-container .pin-container")
   .addIndicators({ name: "Menu" }) // add indicators (requires plugin)
   .addTo(controller);


   controller.scrollTo(function (newpos) {
       TweenMax.to(window, 0.5, { scrollTo: { y: newpos + 1000} });
   });

   $(document).on("click", "a[href^='#']", function (e) {
       var id = $(this).attr("href");
       if ($(id).length > 0) {
           e.preventDefault();

           // trigger scroll
           controller.scrollTo(id);

           // if supported by the browser we can even update the URL.
           if (window.history && window.history.pushState) {
               history.pushState("", document.title, id);
           }
       }
   });


    $('#slides').superslides()
    //$('main').fullpage();
});