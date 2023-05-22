function modal() {
	const modal = document.querySelector('.modal'),
		modalClose = document.querySelector('.modal__close'),
		modalCloseBtn = document.querySelector('.modal__btn'),
		modalTitle = document.querySelector('.modal__title'),
		modalContent = document.querySelector('.modal__content'),
		footerBtn = document.querySelector('.footer__btn'),
		footerInput = document.querySelector('.footer__input')


	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.style.display = 'none'
		}
	})

	modalClose.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	modalCloseBtn.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	function clearInput() {
		footerInput.value = ''
	}

	footerBtn.addEventListener('click', async () => {
		const emailRegExp =
			/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i

		if (emailRegExp.test(footerInput.value)) {
			try {
				const res = await fetch('url', {
					method: 'POST',
					body: footerInput.value
				})
				if (!res.ok) {
					throw new Error();
				} else {
					modal.style.display = 'block'
					clearInput()
				}
			} catch (error) {
				modal.style.display = 'block'
				modalTitle.textContent = 'Oops!'
				modalContent.textContent = 'Somesthing was wrong. Please try again later.'
				clearInput()
			}
		} else {
			const errBlock = document.createElement('p')
			errBlock.textContent = 'Incorrect email!'
			errBlock.classList.add('footer__error')
			footerInput.insertAdjacentElement("afterend", errBlock)

			setTimeout(() => {
				errBlock.remove()
			}, 2000)
		}
	})
}

module.exports = modal