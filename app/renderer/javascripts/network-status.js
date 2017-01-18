const offlineString = 'Offline';
const onlineString = 'Online';

module.exports = class NetworkStatus {
	constructor() {
		this.$el = document.querySelector('#network-status .network-status-text');

		this.addEventListeners();

		if (navigator.onLine) {
			this.setText(onlineString);
		}
	}

	addEventListeners() {
		window.addEventListener('offline', () => {
			this.setText(offlineString);
		});

		window.addEventListener('online', () => {
			this.setText(onlineString);
		});

		return this;
	}

	setText(statusString) {
		this.$el.innerHTML = statusString;
	}
};
