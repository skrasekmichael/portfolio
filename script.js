
loadAge();
loadTimeSpans();

function loadAge() {
	//render correct age in every '.age' class
	const ageElements = document.getElementsByClassName("age");
	const age = (new Date().getFullYear() - 2000);
	for (let i = 0; i < ageElements.length; i++) {
		ageElements[i].innerHTML = age;
	}
}

function loadTimeSpans() {
	const timeSpanElements = document.querySelectorAll("[from]");
	for (let i = 0; i < timeSpanElements.length; i++) {
		const from = new Date(Date.parse(timeSpanElements[i].getAttribute("from")));
		const toElement = timeSpanElements[i].getAttribute("to");

		let to;
		if (toElement == undefined) {
			to = new Date();
		} else {
			to = new Date(Date.parse(toElement));
		}

		timeSpanElements[i].innerHTML = formatTimeSpan(from, to);
	}
}

function formatTimeSpan(from, to) {
	let years = to.getFullYear() - from.getFullYear();
	let months = to.getMonth() - from.getMonth();

	if (months < 0) {
		years--;
		months += 12;
	}

	let msg
	if (years == 0) {
		if (months == 1) {
			msg = "1 month";
		} else {
			msg = `${months} months`;
		}
	} else {
		msg = `${(years + months / 12).toFixed(1)} years`;
	}

	return msg;
}

//menu toggle button
const bar = document.getElementById("bar");
const button = document.getElementById("toggle-menu");
button.onclick = function() {
	bar.classList.toggle("toggle");
}

const scrollTriggers = document.getElementsByClassName("js-scroll-trigger");
for (let i = 0; i < scrollTriggers.length; i++) {
	scrollTriggers[i].onclick = function() {
		bar.classList.remove("toggle");
	}
}

const loadCSS = href => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
};

window.addEventListener("load", () => {
	loadCSS("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap");
});
