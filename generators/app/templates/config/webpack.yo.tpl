/**
 * Created by Asus on 05.11.2016.
 */
var config = require('./main');
var webpack = require('webpack');
var loaders = require('./loaders');
var plugins = require('./plugins');

module.exports = {
    resolve: {
        extensions: config.extensions,
        alias: config.aliases
    },
    module: {
        loaders: loaders
    },
    plugins: plugins
};
