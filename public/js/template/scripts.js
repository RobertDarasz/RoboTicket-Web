
$(document).ready(function () {

    $(window).on('load scroll resize', function () {

        if ($(window).scrollTop() >= ( $(window).height()) - 200  ) {

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
    var controller = new ScrollMagic.Controller();

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

    //ticket.on("end", function (event) {
        //var count = $('.animation-thingy .digits').html();
        //$('.ticket-scanner span.light').css('background', 'green');
        //var int = parseInt(count);
        //console.log(int);
        //$('.animation-thingy .digits').html(int + 1);
       // this.remove();

    //});

    //var seat = new ScrollMagic.Scene({
    //    duration: 260,    // the scene should last for a scroll distance of 100px
    //    triggerElement: ".seat-animated",
        
    //})
    //  .setPin(".seatMy", { pushFollowers: false }) // pins the element for the the scene's duration
    //  .addIndicators()
    //  .addTo(controller); // assign the scene to the controller

    //var clientsbox = new ScrollMagic.Scene({ triggerElement: ".panel.FCKDK", duration: 300, offset:-200})
	//							.setPin(".pin-logos")
	//							.addIndicators({ name: "2 (duration: 0)" }) // add indicators (requires plugin)
	//							.addTo(controller);

    var clients = new TimelineMax()
			//.fromTo(".panel.FCMDK", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
			//.fromTo(".panel.Lech", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }) // in from top
            //.fromTo(".panel.Lechia", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
			//.fromTo(".panel.UL", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
			//.fromTo(".panel.Sparta", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

            .to(".slide-container", 0.5, {z: -100, delay: 1.5})		// move back in 3D space
			.to(".slide-container", 1,   {x: "-16.666%"})	// move in to first panel
			.to(".slide-container", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to second panel
			.to(".slide-container", 0.5, { z: -100, delay: 1.5 })
			.to(".slide-container", 1, { x: "-33.33%" })
			.to(".slide-container", 0.5, {z: 0})
			// animate to third panel
			.to(".slide-container", 0.5, { z: -100, delay: 1.5 })
			.to(".slide-container", 1,   {x: "-49.999%"})
			.to(".slide-container", 0.5, {z: 0})
        // animate to fifth panel
            .to(".slide-container", 0.5, { z: -100, delay: 1.5 })		// move back in 3D space
            .to(".slide-container", 1,   {x: "-66.666%"})	// move in to first panel
            .to(".slide-container", 0.5, {z: 0})				// move back to origin in 3D space
            // animate to sixth panel
            .to(".slide-container", 0.5, { z: -100, delay: 1.5 })
            .to(".slide-container", 1,   {x: "-83.333%"})
            .to(".slide-container", 0.5, {z: 0})
            .to(".slide-container", 0.5, { delay: 1.5 })

   

    // create scene to pin and link animation
    var clientScene = new ScrollMagic.Scene({
        triggerElement: ".pin",
        triggerHook: "onLeave",
        duration: "500%",
        offset:-70,
    })
        .setPin(".pin")
        .setTween(clients)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


   
    $(document).on("click", ".pin-logos a", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            var elemTop = $(id).offset().top;

            console.log(elemTop);
            $('body, html').animate({ scrollTop: elemTop },1000);
          

           
        }
    });


});