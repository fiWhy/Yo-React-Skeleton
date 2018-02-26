var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var config = require('./main');

module.exports = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
    }),
    new HtmlWebpackPlugin({
        template: config.html
    }),
    new CopyWebpackPlugin([{
        from: config.manifest,
        to: config.dist
    }]),
    new ExtractTextPlugin("styles.css")
];