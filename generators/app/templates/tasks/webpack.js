var config = require("../config/main");
var wepback = require('webpack');
var webpackConfig = require('../config/webpack.dev.js');

function run() {
    return wepback(webpackConfig, function (data) {

    })
}

run();