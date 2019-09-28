class Clock {



	constructor (timestamp) {

		this.timestamp = timestamp;
	}

	tick () {

		this.timestamp++;
	}


}

Clock.prototype.timestamp = null;

window.myClock = new Clock(123456789);
window.myClock2 = new Clock(5678765);
window.myClock3 = new Clock();
