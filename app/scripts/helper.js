(function() {
	var SESSION = window.SESSION;
	var Helper = window.Helper = {
		createSession: function(successFnc, errorFnc) {
			errorFnc = errorFnc || function(error) {
				log(error);
				alert("请求失败，请检查您的网络！");
			};
			$.ajax({
				url: '/api/session/create',
				type: 'post',
				dataType: 'json',
				success: function(data) {
					if (data && data.status == "OK") {
						SESSION = window.SESSION = data.session;
						successFnc && $.isFunction(successFnc) && successFnc(SESSION);
					}
				},
				error: errorFnc
			});
		}
	};

	function log(value) {
		window.console && window.console.log && console.log(value);
	}
})();