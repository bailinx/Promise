const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');
const extend = require('extend');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const configDevelopment = extend(true, {}, config, {
    entry: {
        'promise': [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './promise'
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'webpack-module-hot-accept']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.SourceMapDevToolPlugin({}),
        new OpenBrowserPlugin({url: 'http://localhost:3000'})
    ]
})

module.exports = configDevelopment;
