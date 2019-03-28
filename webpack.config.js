const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader']
            }
        ]
    }
};


/* In webpack there are 4 core concepts:
* 1. Entry Point
* 2. output (path to where to save the bundle file)
* 3. Loader (allow us to import/load all kinds of diferent files. More importantly to process them
    for eg: converting SASS to CSS or ES6 to ES5 JS. and for that we need a loader here Babel Loader
    which convert ES6 to ES5)
* 4. Plugins
**/
// __dirname is the current absolute path
// Note: use loader for converting SASS to css (in webpack)