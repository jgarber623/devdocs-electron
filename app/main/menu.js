const {app, ipcMain, Menu, shell} = require('electron');

const pkg = require('../package.json');

let appMenu = {
	label: app.getName(),
	submenu: [
		{
			role: 'about'
		},
		{
			type: 'separator'
		},
		{
			role: 'services',
			submenu: []
		},
		{
			type: 'separator'
		},
		{
			role: 'hide'
		},
		{
			role: 'hideothers'
		},
		{
			role: 'unhide'
		},
		{
			type: 'separator'
		},
		{
			role: 'quit'
		}
	]
};

let fileMenu = {
	label: 'File',
	submenu: [
		{
			role: 'close'
		}
	]
};

let editMenu = {
	label: 'Edit',
	submenu: [
		{
			role: 'undo'
		},
		{
			role: 'redo'
		},
		{
			type: 'separator'
		},
		{
			role: 'cut'
		},
		{
			role: 'copy'
		},
		{
			role: 'paste'
		},
		{
			role: 'delete'
		},
		{
			role: 'selectall'
		},
		{
			type: 'separator'
		},
		{
			label: 'Speech',
			submenu: [
				{
					role: 'startspeaking'
				},
				{
					role: 'stopspeaking'
				}
			]
		}
	]
};

let viewMenu = {
	label: 'View',
	submenu: [
		{
			role: 'reload'
		},
		{
			role: 'toggledevtools'
		},
		{
			type: 'separator'
		},
		{
			role: 'togglefullscreen'
		}
	]
};

let historyMenu = {
	label: 'History',
	submenu: [
		{
			label: 'Back',
			accelerator: 'Cmd+Left',
			enabled: false,
			click(menuItem, browserWindow, event) {
				browserWindow.webContents.send('navigate.goToOffset', -1);
			}
		},
		{
			label: 'Forward',
			accelerator: 'Cmd+Right',
			enabled: false,
			click(menuItem, browserWindow, event) {
				browserWindow.webContents.send('navigate.goToOffset', 1);
			}
		},
		{
			label: 'Home',
			accelerator: 'Cmd+Shift+H',
			enabled: false,
			click(menuItem, browserWindow, event) {
				browserWindow.webContents.send('navigate.goToURL', {
					url: 'http://devdocs.io/'
				});
			}
		}
	]
};

let windowMenu = {
	role: 'window',
	submenu: [
		{
			role: 'minimize'
		}
	]
};

let helpMenu = {
	role: 'help',
	submenu: [
		{
			label: 'Report an Issue',
			click() {
				shell.openExternal(pkg.bugs.url);
			}
		},
		{
			label: 'View Project on GitHub',
			click() {
				shell.openExternal(pkg.homepage);
			}
		}
	]
};

module.exports = class MainMenu {
	constructor() {
		this.addSubscriptions().build();
	}

	addSubscriptions() {
		ipcMain.on('navigate.update', (event, data) => {
			historyMenu.submenu[0].enabled = data.canGoBack;
			historyMenu.submenu[1].enabled = data.canGoForward;
			historyMenu.submenu[2].enabled = data.canGoHome;

			this.build();
		});

		return this;
	}

	build() {
		Menu.setApplicationMenu(Menu.buildFromTemplate(this.template));

		return this;
	}

	get template() {
		return [appMenu, fileMenu, editMenu, viewMenu, historyMenu, windowMenu, helpMenu];
	}
};
