$(document).ready(function() {
	// new height * original width / original height = new width

	var minimumHeight = 768,
		headerHeight = $('header').height() - 20,
		foldHeight = $('#fold').outerHeight();

	resize();

	function resize() {
		var windowHeight = $(window).height(),
			newHeight = windowHeight - (headerHeight + foldHeight + 150);
	
		if (newHeight >= minimumHeight) {
			var callToAction = $('#calltoaction > .fluid'),
				originalHeight = callToAction.height(),
				originalWidth = callToAction.width(),
				newWidth = (newHeight * originalWidth) / originalHeight;	
				callToAction.height(newHeight).css('max-width', newWidth);
		}
	}
	
	$(window).resize(function() {
		resize();
	});

});
