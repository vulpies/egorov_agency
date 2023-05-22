import "./styles/index.scss";

window.addEventListener('DOMContentLoaded', function () {
	const timer = require('./modules/timer');
	const updateText = require('./modules/updateText');
	const modal = require('./modules/modal');

	timer();
	updateText();
	modal();
});

