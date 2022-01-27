## 对贪吃蛇游戏的改写（js -> ts)

<img src="https://img.shields.io/badge/typescript-v4.5.4-green">

<img src="https://img.shields.io/badge/webpack-v5.66.0-blue">

<img src="https://img.shields.io/badge/webpack_cli-v4.9.1-blue">

<img src="https://img.shields.io/badge/less-v4.1.2-ff69b4">

### webpack 配置

~~~webpack
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
~~~

<img src="./Screenshot_20220126_212527.png" style="zoom:75%;" />

<img src="./Screenshot_20220126_211713.png" style="zoom:75%;" />

<img src="./Screenshot_20220126_212631.png" style="zoom:75%;" />
