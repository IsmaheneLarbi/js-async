
window.onload = function(){
	$.get("data/tweets.json").then(function(tweets){
		console.log(tweets);
		return $.get("data/friends.json");
	}).then(function (friends){
		console.log(friends);
		return $.get("data/idols.json");
	}).then(function(idols){
		console.log(idols);
	});
	/*
	function get(url){
		return new Promise(function(resolve, reject){
			var request = new XMLHttpRequest();
			request.open("GET", url, true);
			request.onload = function(){
				if (request.status == 200){
					resolve(JSON.parse(request.response));
				}
				else{
					reject(request.statusText);
				}
			};
			request.onerror = function(){
				reject(request.statusText);
			};
			request.send();
		});
	}

	var promise = get("data/tweets.json");
	promise.then(function(tweets){
		console.log(tweets);
		return get("data/friends.json");
	}).then(function(friends){
		console.log(friends);
		return get("data/idols.json");
	}).then(function (idols){
		console.log(idols);
	}).catch(function(error){
		console.log(error);
	});
	*/
};