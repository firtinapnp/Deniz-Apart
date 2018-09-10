$(document).ready(function(){
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true,
        duration:300
    });

    $("#carousel-prev").click(function(){
        $('#carousel-gallery').carousel("prev")
    });
    $("#carousel-next").click(function(){
        $('#carousel-gallery').carousel('next');
    });

})
