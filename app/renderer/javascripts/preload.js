{
	let $el;

	let interval = window.setInterval(() => {
		$el = document.querySelector('._sidebar-footer-light');

		if ($el instanceof HTMLElement) {
			clearInterval(interval);

			$el.style.display = 'none';
		}
	}, 10);
}
