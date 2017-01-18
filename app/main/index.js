const {app} = require('electron');

const MainMenu = require('./menu');
const MainWindow = require('./window');

app.on('ready', () => {
	new MainMenu();
	new MainWindow();
});
