/*global $*/
/*global jQuery*/

$(document).ready(function(){
    //make nav items re-align to left inside hamburger on small screens
    $("#hamburger").on("click", function(){
        $("#nav-links").toggleClass("nav-links-center");
        $(".navbar-nav").toggleClass("nav-links-right");
    });
    $(".info").hover( function(){
        $(".carousel").slick("slickPause");
        }, function(){
        $(".carousel").slick("slickPlay")
    });
    //slick carousel
    $(".carousel").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 1000,
        pauseOnHover: false,
        pauseOnDotsHover: true
    });
    var year = new Date().getFullYear();
    $("#year").text(year);
    // toggle menu arrow icons
    $(".menu-titles").on("click", function(){
        $(this).find(".arrows").toggleClass("hidden");
    });
});