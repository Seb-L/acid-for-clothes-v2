jQuery(document).ready(function($) {

	new WOW().init();

	// Product
	$('.product-images').on('click', 'a', function(event){
		event.preventDefault();

		$('.primary_image').prop('src', $(this).prop('href'));
		$('.product-images li.selected').removeClass('selected');
		$(this).closest('li').addClass('selected');
	});
	


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

angular.module('acidApp', []).config(['$interpolateProvider', 
	function ($interpolateProvider) { 
		$interpolateProvider.startSymbol('[['); 
		$interpolateProvider.endSymbol(']]'); 
	}
]); 

function cutGuideCtrl($scope){

	$scope.profileL = 'paul';
	$scope.cutL = 'droit';
	$scope.sizeL = 's';

	$scope.profileR = 'paul';
	$scope.cutR = 'droit';
	$scope.sizeR = 's';

}