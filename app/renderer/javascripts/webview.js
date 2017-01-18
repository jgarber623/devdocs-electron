const {shell} = require('electron');
const RadioRadio = require('radioradio');

module.exports = class Webview {
	constructor() {
		this.$el = document.querySelector('#webview');
		this.homeURL = this.$el.getAttribute('src');

		this.addEventListeners().addSubscriptions();
	}

	addEventListeners() {
		this.$el.addEventListener('did-navigate-in-page', () => {
			RadioRadio.publish('navigate.update', {
				canGoBack: this.$el.canGoBack(),
				canGoForward: this.$el.canGoForward(),
				canGoHome: this.$el.getURL() !== this.homeURL
			});
		});

		this.$el.addEventListener('new-window', (event) => {
			event.preventDefault();

			shell.openExternal(event.url);
		});

		return this;
	}

	addSubscriptions() {
		RadioRadio.subscribe('navigate.goToURL', (data) => {
			this.$el.loadURL(data.url);
		});

		RadioRadio.subscribe('navigate.goToOffset', (data) => {
			if (data.hasOwnProperty('offset')) {
				this.$el.goToOffset(data.offset);
			}
		});

		return this;
	}
};
