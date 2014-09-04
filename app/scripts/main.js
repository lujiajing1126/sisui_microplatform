$(function(){
	'use strict';
	var ua = window.navigator.userAgent,
		iPhoneUA = /iPhone/i;
	console.log(""+ua);
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
	var last_update = 0,
		sisuLogo = $('div#logo'),
		deviceMotionHandler = function(evt) {
			var acceleration = evt.accelerationIncludingGravity,
				curTime = new Date().getTime();  
			if ((curTime - last_update) > 50) {
				var diffTime = curTime - last_update,
					OffsetX = acceleration.x * 5;
				if (iPhoneUA.test(ua)) {
					OffsetX = -OffsetX;
				}
				last_update = curTime;
				//console.log(acceleration.x);
				if (Math.abs(acceleration.x) > 0.2) {
					sisuLogo.css({left:OffsetX+'px'});
				}
	        }
		};
	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion',deviceMotionHandler, false);  
    }
});