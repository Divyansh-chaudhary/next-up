$(document).ready( function(){

    /******** black strip animation ****/
    setTimeout( function() {
        $(".head-animation").hide();
    }, 1300);

    /*******   menu show and hide  ********/
    $("nav .btn").click( function(){
        $(this).toggleClass("cross");
        $("nav ul").toggleClass("ul-show");
        $("nav .social-icons").toggleClass("show-icons");
    });

    /******* slick ************ */
    if(screen.width < 470 ) {
      $('.carousal-one').slick({
        autoplay: true,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 4
      });
      $('.t-shirts').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    $('.carousel-video').slick({
      autoplay: false,
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.fa-arrow-left',
      nextArrow: '.fa-arrow-right'
    });

    /*********** parallax scrolling ****************/
    if( screen.width < 1439 ) {
      window.addEventListener("scroll", function () {
        $("header")[0].style.backgroundPositionY = pageYOffset * 0.09 + "px";
      });
    }

});