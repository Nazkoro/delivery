const path = require('path')

module.exports = {
	entry: {
		main: './public/src/index.js',
		menu: './public/src/menu.js'
	},
	output: {
		filename: '[name].js',
		// path: path.resolve(__dirname, 'dist')
		path: path.resolve(`${__dirname}/public/`, 'dist')
		
	},
	devtool: 'eval-source-map' 
}