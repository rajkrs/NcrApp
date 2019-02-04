// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve, join } = require('path');
const commonConfig = require('./common');

module.exports = merge(commonConfig,
    {
        devtool: 'source-map',
        entry: "./app.tsx",
        mode: "development",
        watch:true,
        output: {
            filename: "./app-bundle.js"
        },
        resolve: {
            extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx', '.scss', '.css']
        },
        externals: {
            'Config':JSON.stringify(require('./dev-config.json'))
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"',
            }),
            //new webpack.HotModuleReplacementPlugin(), // enable HMR globally
            new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        ]
    });