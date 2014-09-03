$(function() {
	'use strict';
	var INDEX = 0,
		TOTALNUM = 7;
	
	$(".box-controller.down").show();

	var Actions = {
		boxUp: function() {
			$(".box-wrapper").stop().animate({
				top: -(--INDEX) * 100+"%"
			},1000);
			if (INDEX <= 0) {
				$(".box-controller.up").hide();
			}
			if (INDEX < TOTALNUM - 1) {
				$(".box-controller.down").show();
			}
		},
		boxDown: function() {
			$(".box-wrapper").stop().animate({
				top: -(++INDEX) * 100+"%"
			},1000);
			if (INDEX >= TOTALNUM - 1) {
				$(".box-controller.down").hide();
			}
			if (INDEX > 0) {
				$(".box-controller.up").show();
			}
		}
	};

	$(document).on("click", "[data-xx-action]", function(event) {
		event = event || window.event;
		event.preventDefault();
		var actionName = $(this).attr("data-xx-action"),
			action = Actions[actionName];
		action && $.isFunction(action) && action.call(this, event);
	});
});