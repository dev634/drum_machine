function keyAction(e) {
	const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (audio) {
		audio.currentTime = 0;
		audio.play();
	} else {
		alert("Sorry an error happen wrong type try again ...");
	}
}

window.addEventListener("keydown", keyAction);
