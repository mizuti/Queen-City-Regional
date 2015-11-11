  $(window).load(function() {
       $('.flexslider').flexslider({
    	slideshow: true,
    	slideshowSpeed: 3000,
    	animationSpeed: 1000
    });
       $('.leagueContent').on('hover', '.leagueContetn', function(event) {
       	event.preventDefault();
       	$(this).hide('slow/400/fast', function() {

       	});
       });
       // $('.nav li').on('hover', function(){
       // 	$('.activeNav').removeClass('activeNav');
       // 	$('this').addClass('activeNav');

       // });

	$('.flex-item').each(function(i) {
	$(this).delay((i++) * 350).fadeTo(1000, 1); });

  });
