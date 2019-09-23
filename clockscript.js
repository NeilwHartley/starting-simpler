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
    if (h > 12) {
    	h12hr = h - 12;
    } else {
    	h12hr = h;
    }
    minsDeg = 0.5 * m; //Each hour is 360 degrees so each minute is equal to 0.5 of a degree NH
	hDeg = (360 / 12) * h12hr + 180 + minsDeg;
	hDegInsert = "rotate(" + hDeg + "deg)";
	document.getElementById("hourHand").style.transform = hDegInsert;
}

function startMinute() {
	secsDeg = 0.1 * s;
	mDeg = (360 / 60) * m + 180 + secsDeg;
	mDegInsert = "rotate(" + mDeg + "deg)";
	document.getElementById("minuteHand").style.transform = mDegInsert;
}

// I don't know NH
function startSecond() {
	sDeg = ((360 / 60) * s) + 180;
	sDegInsert = "rotate(" + sDeg + "deg)";
	document.getElementById("secondHand").style.transform = sDegInsert;
	console.log(s);
	console.log(sDeg);
	console.log(sDegInsert);
}

/*
	Semi colons for the function definitions.

	Challenge
	The hour hand doesnt appear as it would usually on a clock; ie between the hours with respect to minuites.
	See if you can incorperate the minuite progression into the angle :) some fun maths for you there :)
	If you do undertake this challenge, I wouldnt worry about the seconds, though you could technically incorperate it, im sure its negligable.
JB */
