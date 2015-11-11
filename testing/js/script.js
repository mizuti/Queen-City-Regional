$(window).load(function() {
    $('.flexslider').flexslider({
        slideshow: true,
        slideshowSpeed: 3000,
        animationSpeed: 1000
    });
    $('.flex-item').each(function(i) {
        $(this).delay((i++) * 350).fadeTo(1000, 1);
    });
    // $('.nav li').on('hover', function(){
    // 	$('.activeNav').removeClass('activeNav');
    // 	$('this').addClass('activeNav');

    // });
});
