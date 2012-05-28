$(document).ready(function() {
	// new height * original width / original height = new width

	var minimumHeight = 568;
	var headerHeight = $('header').height() - 20;
	var foldHeight = $('#fold').outerHeight();

	resize();

	function resize() {
		var windowHeight = $(window).height(),
			newHeight = windowHeight - (headerHeight + foldHeight + 150);
	
		if (newHeight >= minimumHeight) {
			var callToAction = $('#calltoaction > .fluid');
			var	originalHeight = callToAction.height();
			var originalWidth = callToAction.width();
			var newWidth = (newHeight * originalWidth) / originalHeight;	
			callToAction.height(newHeight).css('max-width', newWidth);
		}
	}
	
	$(window).resize(function() {
		resize();
	});

});
