// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DEV = process.env.DEV;
var LIVELOAD = process.env.LIVELOAD;
var webpack = require('webpack');
// var package = require('./package');

var config = {
    context: __dirname,
    entry: {
        'promise': ['./promise'],
    },
    output: {
        path: __dirname + '/build',
        publicPath: 'http://localhost:3000/build/',
        filename: '[name].js',
        // library: 'Promise',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [
            '', '.js', '.jsx'
        ],
        alias: {
            '$ROOT': __dirname + '/src',
            // '$VERSION': package.version
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(DEV
                    ? 'development'
                    : 'production')
            }
        })
    ]
};

module.exports = config;
