const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const ampm = (hours) => {
	return hours >= 12 ? 'PM' : 'AM';
};
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const Month = [
	'Jan',
	'Feb',
	'Mar',
	'April',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const dayOfWeek = time.getDay();
	// console.log(hours, hoursForClock);
	hourEl.style.transform = `translate(-50%, -100%) rotate(${
		(hoursForClock / 12) * 360
	}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${
		(minutes / 60) * 360
	}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${
		(seconds / 60) * 360
	}deg)`;
	// timeEl.innerHTML = `${hoursForClock}:${
	// 	minutes < 10 ? `0${minutes}` : minutes
	// }`;
	timeEl.innerHTML = `${String(hoursForClock).padStart(2, '0')}:${String(
		minutes
	).padStart(2, '0')} ${ampm(hours)}`;
	dateEl.innerHTML = `${days[dayOfWeek]}, ${Month[month]} <span class="circle">${day}</span>`;
}

setTime();
setInterval(setTime, 1000);
