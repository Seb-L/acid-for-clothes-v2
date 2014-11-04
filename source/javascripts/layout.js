jQuery(document).ready(function($) {
	
	// submenus
	$('.activate-sub-menu').click(function(e){
		e.preventDefault();

		var subMenu = $( $(this).attr('href') );

		if( subMenu.hasClass('open') ){
			subMenu.removeClass('open');
		}
		else{
			subMenu.addClass('open');
		}
	});


	// guide coupe
	$('.cuts-charts-btn, .cuts-charts .close-btn').click(function(e){
		e.preventDefault();

		var guide = $('.cuts-charts');

		if( guide.hasClass('open') ){
			guide.removeClass('open');
		}
		else{
			guide.addClass('open');
		}
	});


});

