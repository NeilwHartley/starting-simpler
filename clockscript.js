var t = new Date();
var h = t.getHours().toString();
var m = t.getMinutes().toString();
var s = t.getSeconds().toString();

function timeNow() {
	setTimeout(timeNow, 1000);
	document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
	t = new Date ();
	h = t.getHours().toString();
	m = t.getMinutes().toString();
	s = t.getSeconds().toString();
	startHour();
	startMinute();
	startSecond();
	}

function startHour() {
		h12hr = 22 - h;
		hDeg = ((360/12) * h12hr + 180);
		hDegInsert = "rotate(" + hDeg + "deg)";
		document.getElementById("hourHand").style.transform = hDegInsert;
	}

function startMinute() {
	mDeg = ((360/60) * m) + 180;
	mDegInsert = "rotate(" + mDeg + "deg)";
	document.getElementById("minuteHand").style.transform = mDegInsert;
}

function startSecond() {
	sDeg = ((360/60) * s) + 180;
	sDegInsert = "rotate(" + sDeg + "deg)";
	document.getElementById("secondHand").style.transform = sDegInsert;
	console.log(s);
	console.log(sDeg);
	console.log(sDegInsert);
}
