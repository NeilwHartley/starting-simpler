
var t = new Date();
var h = t.getHours().toString();
var m = t.getMinutes().toString();
var s = t.getSeconds().toString();


function timeNow() {
	setInterval(timeNow, 1000);
	document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
	t = new Date ();
	h = t.getHours().toString();
	m = t.getMinutes().toString();
	s = t.getSeconds().toString();
}
