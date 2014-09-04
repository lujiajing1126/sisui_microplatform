$(function(){
	'use strict';
	var ua = window.navigator.userAgent,
		iPhoneUA = /iPhone/i,
		isiPhone = iPhoneUA.test(ua),
		inMicroMessenger = /MicroMessenger/i,
		isMicroMessenger = inMicroMessenger.test(ua),
		isIPHONE5noMicroMessage = $(window).height()==920 && isiPhone,
		isIPHONE4noMicroMessage = $(window).height()==744 && isiPhone,
		isIPHONE5inMicroMessage = $(window).height()==1008 && isiPhone && isMicroMessenger,
		isIPHONE4inMicroMessage = $(window).height()==832 && isiPhone && isMicroMessenger;
	$('html').height($(window).height());
	$('body').height($(window).height());
	$('body > .sisu').height($(window).height());
	$(document).on('touchend','#mainmenu',function(evt){
		var items = $('.share-menu-item.hidden-item');
		if(items.length > 0)
			items.removeClass('hidden-item');
		else
			$('.share-menu-item').addClass('hidden-item');
	});
	$(document).on('touchend','#logo > img',function(evt){
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
				if (isiPhone) {
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
    if(isIPHONE5noMicroMessage || isIPHONE5inMicroMessage) {
    	$('#weixin').css({top:'-75px'});
    	$('#renren').css({top:'-170px',left:'160px'});
    	$('#weibo').css({top:'-240px',left:'145px'});
    }
    if(isIPHONE4noMicroMessage || isIPHONE4inMicroMessage) {
    	$('#weixin').css({top:'-80px'});
    	$('#renren').css({top:'-180px',left:'170px'});
    	$('#weibo').css({top:'-255px',left:'165px'});
    }
});