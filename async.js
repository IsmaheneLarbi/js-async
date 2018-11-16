window.onload = function () {
	// body...
	var http = new XMLHttpRequest();//0

	http.onreadystatechange = function(){
		if (http.readyState == 4 && http.status == 200)
		{
			console.log(JSON.parse(http.response));
		}
	};
//	prepare request with open 
//	asynchronus = true 
	http.open("GET", "data/tweets.json", true);//1
	http.send();//2
	console.log("I'm running :)");
};


/*READY STATES

0- request ! initialized
1- request set up
2- sent
3- in process....
4-complete
*/