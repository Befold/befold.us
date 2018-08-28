const path = require('path');

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	module: {
	  rules: [
	    {
	      test: /\.(jsx|js)$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['react', 'stage-2'],
	        }
	      }
	    }
	  ]
	},
	entry: path.resolve('client/client.js'),
	output: {
		path: path.resolve('public/js/'),
		filename: 'befold.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'client/components'),
			'@constants': path.resolve(__dirname, 'client/constants'),
			'@utility': path.resolve(__dirname, 'client/utility'),
		}
	}
};
