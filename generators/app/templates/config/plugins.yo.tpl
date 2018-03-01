var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var config = require('./main');

var filesToCopy = [{
    from: config.manifest,
    to: config.dist
},
{
    from: config.assets,
    to: config.dist
}];

if (config.env.production) {
    filesToCopy = filesToCopy.concat([
        {
            from: config.images,
            to: config.dist
        },
        {
            from: config.sw,
            to: config.dist
        },
    ])
}

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
    }),
    new HtmlWebpackPlugin({
        template: config.html
    }),
    new webpack.DefinePlugin({
        "process.env.envconfig": config.env
    }),
    new CopyWebpackPlugin(filesToCopy),
    new ExtractTextPlugin("styles.css")
];

if (config.env.production) {
    plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]);
}

module.exports = plugins;