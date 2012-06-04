window.onload = function() {
	document.getElementById("greeting").innerHTML = getGreeting(now);
}; var now = new Date();
var getGreeting = function(now) {
	var string = now.toLocaleTimeString();
	if(now.getHours()<10) {
		return ("Good Morning. The time is " + string+ ". Get your arse out of Bed!");
	} 
	else if(10<=now.getHours()<=16) {
		return ("Good Day. The time is " + string+ ". Is it happy hour yet?");
	} 
	else {
	    return ("Good Evening. The time is " + string+"...sleepy...."); }
};
