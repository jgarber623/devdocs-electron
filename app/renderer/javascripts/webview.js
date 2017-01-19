const {ipcRenderer, shell} = require('electron');
const RadioRadio = require('radioradio');

const config = require('../../config');

module.exports = class Webview {
	constructor() {
		this.$el = document.querySelector('#webview');

		this.$el.setAttribute('src', config.urls.home);
		this.$el.setAttribute('preload', '../javascripts/preload.js');

		this.addEventListeners().addSubscriptions();
	}

	addEventListeners() {
		this.$el.addEventListener('did-navigate-in-page', (event) => {
			RadioRadio.publish('navigate.update', {
				canGoBack: this.$el.canGoBack(),
				canGoForward: this.$el.canGoForward(),
				canGoHome: event.url !== config.urls.home
			});
		});

		this.$el.addEventListener('new-window', (event) => {
			event.preventDefault();

			shell.openExternal(event.url);
		});

		return this;
	}

	addSubscriptions() {
		ipcRenderer.on('navigate.loadURL', (event, url) => {
			this.loadURL(url);
		});

		ipcRenderer.on('navigate.goToOffset', (event, offset) => {
			this.goToOffset(offset);
		});

		RadioRadio.subscribe('navigate.loadURL', (data) => {
			this.loadURL(data.url);
		});

		RadioRadio.subscribe('navigate.goToOffset', (data) => {
			if (data.hasOwnProperty('offset')) {
				this.goToOffset(data.offset);
			}
		});

		return this;
	}

	goToOffset(offset) {
		this.$el.goToOffset(offset);

		return this;
	}

	loadURL(url) {
		this.$el.loadURL(url);

		return this;
	}
};
