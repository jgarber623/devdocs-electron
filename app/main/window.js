const {BrowserWindow} = require('electron');

const browserWindowOptions = {
	width: 1024,
	height: 768,
	minWidth: 800,
	minHeight: 600,
	backgroundColor: '#fff',
	center: true,
	show: false,
	titleBarStyle: 'hidden-inset'
};

module.exports = class MainWindow {
	constructor() {
		this.browserWindow = new BrowserWindow(browserWindowOptions);

		this.addEventListeners();

		this.browserWindow.setSheetOffset(38);

		this.browserWindow.loadURL(`file://${__dirname}/../renderer/views/index.html`);
	}

	addEventListeners() {
		this.browserWindow.once('ready-to-show', this.browserWindow.show);

		this.browserWindow.on('closed', () => {
			this.browserWindow = null;
		});

		this.browserWindow.on('focus', () => {
			this.browserWindow.webContents.send('window.focus');
		});

		return this;
	}
};
