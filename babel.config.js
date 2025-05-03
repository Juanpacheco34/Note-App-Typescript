module.exports = {
	presets: [
		// Transforma el código moderno de JavaScript (ES6+) en una versión compatible con la versión de Node.js que estás usando (node: "current").
		["@babel/preset-env", { targets: { node: "current" } }],
		// Permite que Babel entienda y compile archivos TypeScript (.ts, .tsx)
		"@babel/preset-typescript",
	],
};
