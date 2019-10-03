class Clock {



	constructor (timestamp) {

		this.timestamp = new Date();
	}

	tick () {

		this.timestamp++;
	}


}

Clock.prototype.timestamp = null;

window.myClock3 = new Clock();

console.log(myClock3);
