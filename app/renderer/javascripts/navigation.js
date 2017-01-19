const {ipcRenderer} = require('electron');
const RadioRadio = require('radioradio');

const config = require('../../config');

class Button {
	constructor($el, options) {
		this.$el = $el;
		this.options = options;

		this.addEventListeners();
	}

	addEventListeners() {
		this.$el.addEventListener('click', (event) => {
			event.preventDefault();

			RadioRadio.publish(this.options.topic, this.options.data);
		});
	}

	disable() {
		this.$el.setAttribute('disabled', true);
	}

	enable() {
		this.$el.removeAttribute('disabled');
	}
}

module.exports = class Navigation {
	constructor() {
		this.backButton = new Button(document.querySelector('#back-button'), {
			topic: 'navigate.goToOffset',
			data: {
				offset: -1
			}
		});

		this.forwardButton = new Button(document.querySelector('#forward-button'), {
			topic: 'navigate.goToOffset',
			data: {
				offset: 1
			}
		});

		this.homeButton = new Button(document.querySelector('#home-button'), {
			topic: 'navigate.loadURL',
			data: {
				url: config.urls.home
			}
		});

		this.addSubscriptions();
	}

	addSubscriptions() {
		RadioRadio.subscribe('navigate.update', (data) => {
			ipcRenderer.send('navigate.update', data);

			if (data.hasOwnProperty('canGoBack')) {
				this.backButton[data.canGoBack ? 'enable' : 'disable']();
			}

			if (data.hasOwnProperty('canGoForward')) {
				this.forwardButton[data.canGoForward ? 'enable' : 'disable']();
			}

			if (data.hasOwnProperty('canGoHome')) {
				this.homeButton[data.canGoHome ? 'enable' : 'disable']();
			}
		});

		return this;
	}
};
