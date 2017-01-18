window.addEventListener('load', () => {
	let stylesheet = document.createElement('style');
	let cssText = document.createTextNode('._sidebar-footer-light { display: none !important; }');

	stylesheet.appendChild(cssText);
	document.querySelector('head').appendChild(stylesheet);
});
