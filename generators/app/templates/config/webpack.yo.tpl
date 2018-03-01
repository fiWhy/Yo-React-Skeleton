var config = require('./main'); 
var webpack = require('webpack'); 
var loaders = require('./loaders'); 
var plugins = require('./plugins'); 
var root = require('../helpers/root'); 
 
module.exports = {
    devtool: "source-map",
    resolve: { 
        extensions: config.extensions, 
        alias: config.aliases 
    }, 
    module: { 
        loaders: loaders 
    }, 
    plugins: plugins 
};