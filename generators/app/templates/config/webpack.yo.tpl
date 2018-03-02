var config = require('./main');
var webpack = require('webpack');
var loaders = require('./loaders');
var plugins = require('./plugins');
var root = require('../helpers/root');

var webpackConfig = {
    resolve: {
        extensions: config.extensions,
        alias: config.aliases
    },
    module: {
        loaders: loaders
    },
    plugins: plugins
};

if(!config.env.production)
    webpackConfig.devtool = "source-map";

module.exports = webpackConfig;