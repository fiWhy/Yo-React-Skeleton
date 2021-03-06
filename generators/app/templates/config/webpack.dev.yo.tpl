var config = require("./main");
var webpackConfig = require("./webpack");
var merge = require("webpack-merge");

module.exports = merge(webpackConfig, {
    entry: {
        vendor: [config.src + '/vendor.ts', "react", "react-dom", "redux", "react-redux", "redux-thunk", config.src + "/styles.scss"],
        app: config.src + '/app.tsx'
    },
    
    output: {
        path: config.dist,
        filename: "[name].bundle.js"
    },

    devServer: {
        contentBase: config.src,
        colors: true,
        hot: true,
        historyApiFallback: true
    }
});