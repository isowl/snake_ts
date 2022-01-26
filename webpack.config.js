const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },


    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development'
        })
    ]
}