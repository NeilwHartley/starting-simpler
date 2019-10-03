
// I don't understand anything

class Clock {



	constructor (timestamp) {

		this.timestamp = new Date();
	}

	tick () {

		this.timestamp++;
	}


}

// This doesn't seem to do anything?
// Clock.prototype.timestamp = null;

window.myClock3 = new Clock();

console.log(myClock3);
