   // SLICK  STARTS
   $( document ).ready(function() {
    // $('.your-class').slick({
    //     dots:true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // });

    //     $('.your-foot').slick({
    //     dots:false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // });
        
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });

    });