function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
	var MIN_NUMBER = 0;
	var MAX_NUMBER = 1000000;
	if (n > MIN_NUMBER && n < MAX_NUMBER) {
		var start = MIN_NUMBER + 1;
		var end = n;
		while (start < end) {
			var mid = Math.floor((end - start) / 2) + start;
			// As the only source of randomness is binary (true, false), binary search
			// is used in order to search for a random number.
			// If flip true, go to the right to find a number.
			if (flip()) {
				start = mid + 1;
			}
			// Else go to the left.
			else {
				end = mid;
			}
		}
		return start;
	}
	else {
		throw "Number out of range."
	}
}

function timer() {
	// The numbers are parsed every time, in order to not have global variables for them.
	var daysElement = document.getElementById("days");
	var hoursElement = document.getElementById("hours");
	var minutesElement = document.getElementById("minutes");
	var secondsElement = document.getElementById("seconds");
	var days = parseInt(daysElement.innerHTML);
	var hours = parseInt(hoursElement.innerHTML);
	var minutes = parseInt(minutesElement.innerHTML);
	var seconds = parseInt(secondsElement.innerHTML);
	if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
		clearInterval(intervalVar);
	}
	else if (seconds == 0) {
			seconds = 59;
			if (minutes == 0) {
				minutes = 59;
				if(hours == 0) {
					hours = 23;
					if(days > 0) {
						days -= 1;
					}
				}
				else{
					hours -= 1;
				}
			}
			else {
				minutes -= 1;
			}
		}
		else {
			seconds -= 1;
		}
		daysElement.innerHTML=days;
		hoursElement.innerHTML=hours;
		minutesElement.innerHTML=minutes;
		secondsElement.innerHTML=seconds;
}

var ONE_SECOND = 1000;
intervalVar = setInterval(timer, ONE_SECOND);
console.log(randomNumber(300));
console.log(randomNumber(999999));
console.log(randomNumber(1));