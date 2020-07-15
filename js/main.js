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
});