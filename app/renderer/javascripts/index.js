const {ipcRenderer} = require('electron');
const RadioRadio = require('radioradio');

const Navigation = require('./navigation');
const NetworkStatus = require('./network-status');
const Webview = require('./webview');

new Navigation();
new NetworkStatus();
new Webview();

ipcRenderer.on('navigate.goToURL', (event, data) => {
	RadioRadio.publish('navigate.goToURL', {
		url: data.url
	});
});

ipcRenderer.on('navigate.goToOffset', (event, offset) => {
	RadioRadio.publish('navigate.goToOffset', {
		offset: offset
	});
});
