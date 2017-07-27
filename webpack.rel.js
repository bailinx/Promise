const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');
const extend = require('extend');

const configProduction = extend(true, {}, config, {
    output: {
        filename: '[name].js'
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            mangle: {
                except: ['$', 'exports', 'require']
            },
            output: {
                ascii_only: true,
                comments: false
            }
        })]
})

module.exports = configProduction;
