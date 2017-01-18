const {app} = require('electron');

const MainMenu = require('./menu');
const MainWindow = require('./window');

let mainMenu;
let mainWindow;

app.on('ready', () => {
	mainMenu = new MainMenu();
	mainWindow = new MainWindow();
});
