//render correct age in every '.age' class
const elements = document.getElementsByClassName("age");
const age = (new Date().getFullYear() - 2000);
for (let i = 0; i < elements.length; i++) {
	elements[i].innerHTML = age;
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
