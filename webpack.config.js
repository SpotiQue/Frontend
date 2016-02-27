var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './js/app',
        html: './index.html'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
                query: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(?:woff2?|ttf|svg)(?:\?v=[0-9.]*)?$/,
                loader: "url-loader"
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    }
};
