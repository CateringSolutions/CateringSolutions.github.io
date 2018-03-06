/*global $*/
/*global jQuery*/
$(document).ready(function(){
    //make nav items re-align to left inside hamburger on small screens
    $("#hamburger").on("click", function(){
        $("#nav-links").toggleClass("nav-links-center");
        $(".navbar-nav").toggleClass("nav-links-right");
    });
    //slick carousel
    $(".carousel").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 1000
        // prevArrow:'<div class="a-left control-c prev slick-prev"><span class="fas fa-chevron-left"></span><span class="sr-only">Prev</span></div>',
        // nextArrow:'<div class="a-right control-c next slick-next"><span class="fas fa-chevron-right"></span><span class="sr-only">Next</span></div>'
    });
});