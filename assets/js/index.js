const keys = document.querySelectorAll(".pad");
const screen = document.querySelector(".screen");

function removeTransition(e) {
	if (e.propertyName !== "transform") {
		return;
	}

	this.classList.remove("is-playing");
}

function keyAction(e) {
	const pad =
		document.querySelector(`.pad[data-key="${e.keyCode}"]`) ||
		document.querySelector(`.pad[data-key="${e.target.dataset.key}"]`);

	const audio =
		document.querySelector(`audio[data-key="${e.keyCode}"]`) ||
		document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);

	screen.classList.add("is-highlight");
	setTimeout(function () {
		screen.classList.remove("is-highlight");
	}, 70);
	screen.textContent = audio.currentSrc
		.toUpperCase()
		.split("/")
		.pop()
		.split(".")[0];

	if (!pad) {
		return;
	}
	pad.classList.add("is-playing");

	if (!audio) {
		return;
	}

	audio.currentTime = 0;
	audio.play();
}

keys.forEach(elmt => {
	elmt.addEventListener("click", keyAction);
	elmt.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", keyAction);
