$(document).ready(function() {
	// new height * original width / original height = new width

	var minimumHeight = 350;
	var headerHeight = $('header').height() - 20;
	var foldHeight = $('#fold').outerHeight();

//	resize();

	function resize() {
		var windowHeight = $(window).height();
		var	newHeight = windowHeight - (headerHeight + foldHeight + 400);
	
		if (newHeight >= minimumHeight) {
			var callToAction = $('#calltoaction > .fluid');
			var	originalHeight = callToAction.height();
			var originalWidth = callToAction.width();
			var newWidth = (newHeight * originalWidth) / originalHeight;	
			callToAction.height(newHeight).css('max-width', newWidth);
		}
	}
	
	$(window).resize(function() {
//		resize();
	});

});
