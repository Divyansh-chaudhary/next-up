$(document).ready( function(){
    $("nav .btn").click( function(){
        $(this).toggleClass("cross");
        $("nav ul").toggleClass("ul-show");
        $("nav .social-icons").toggleClass("show-icons");
    });
});