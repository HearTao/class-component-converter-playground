const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist/static'),
        filename: 'app.[hash].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'class-component-converter',
            template: './static/index.html'
        })
    ]
};
