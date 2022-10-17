const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');

module.exports = merge(config, {
    mode:'development',
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        liveReload: true,
      },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.[contenthash].js',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    watch: true,
});