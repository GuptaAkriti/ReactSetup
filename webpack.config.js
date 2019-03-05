var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var parentDir = path.join(__dirname);

module.exports = {
    entry: parentDir+'/index.js',
    output: {
        path:  parentDir + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
      })]
};

