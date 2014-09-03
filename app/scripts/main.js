$(function(){
	'use strict';
	$('html').height($(window).height());
	$('body').height($(window).height());
	$('body > .sisu').height($(window).height());
	$(document).on('touchstart','#mainmenu',function(){
		var items = $('.share-menu-item.hidden-item');
		if(items.length > 0)
			items.removeClass('hidden-item');
		else
			$('.share-menu-item').addClass('hidden-item');
	});
	var SHAKE_THRESHOLD = 800,
		last_update = 0,
		sisuLogo = $('div#logo'),
		deviceMotionHandler = function(evt) {
			var acceleration = evt.accelerationIncludingGravity,
				curTime = new Date().getTime();  
			if ((curTime - last_update) > 50) {
				var diffTime = curTime - last_update,
					OffsetX = acceleration.x * 5;
				last_update = curTime;
				sisuLogo.css({left:OffsetX+'px'})
	        }
		};
	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion',deviceMotionHandler, false);  
    }
});