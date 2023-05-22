function updateText() {

	const timeDays = document.querySelector('.main__timer #days + h4'),
		timeHours = document.querySelector('.main__timer #hours + h4'),
		timeMinutes = document.querySelector('.main__timer #minutes + h4'),
		timeSeconds = document.querySelector('.main__timer #seconds +  h4')

	function changeText(DD, HH, MM, SS) {
		timeDays.textContent = DD;
		timeHours.textContent = HH;
		timeMinutes.textContent = MM;
		timeSeconds.textContent = SS;
	}

	window.addEventListener('resize', function () {
		if (document.body.clientWidth < 1024) {
			changeText('DD', 'HH', 'MM', 'SS')
		} else {
			changeText('Days', 'Hours', 'Minutes', 'Seconds')
		}
	});

}

module.exports = updateText;