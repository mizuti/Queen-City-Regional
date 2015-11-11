*** Jquery
$('#filters').on('click', '.onsale-filter', function(){
	$(.vacation).filter('.onsale').addClass('highlighted');
});


$('#filters').on('click', '.expired-filter', funciton(){
	$('.vacation').filter('.onsale').addClass('highlighted')

});


/* grab a bit of info from an element, have a way to apply specific attributes that are set when built in html */
$(document).ready(function(){
  $("button").on("click", function(){
    var discount = $(this).closest(".tour").data("discount");
    var message = $("<span>Call 1-555-jquery-air for a "+discount+" discount.</span>");
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});



/*=========
AJAX
=========*/

$.ajax('confirmation.html', {
	success: function(response) {
		$('.ticket').html(response).slideDown();

		});

$.ajax('confirmation.html?confNum=1234', {
	success: function(response) {
		$('.ticket').html(response).slideDown();
	},
	data('confNum': 1234)
	}



})


		});
	}

})



