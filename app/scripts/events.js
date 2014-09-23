(function() {
	Helper.createSession(getEvents);

	function getEvents(session) {
		var boardName = "上海外国语大学,上海外国语大学松江校区,上海外国语大学虹口校区";
		$.ajax({
			url: '/api/account/list_events?session=' + session + '&skip=0&limit=100&boards=' + boardName,
			dataType: 'json',
			success: function(data) {
				if(data.status=="OK"){
					$.each(data.events,function(idx,item){
						item.event.begin.$date=moment(item.event.begin.$date).format('YYYY-MM-DD HH:mm');
						item.event.end.$date=moment(item.event.end.$date).format('YYYY-MM-DD HH:mm');
					});
					$(".events-container").html(template("eventsContent",data));
					$(".event-logo").css("height",$(window).height()/2);
				}else{
					alert(data.status+"："+data.message);
				}
			},
			error: function(error) {
				alert(error);
			}
		});
	}
})();