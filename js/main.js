$(document).ready( function(){

    /******** document ready animation ****/
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
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $('.t-shirts').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
    $('.video-carousal').slick({
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
});