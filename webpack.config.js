const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


/* import VueLoaderPlugin from  'vue-loader' */
//  module.exports ={} node的方式向外暴露一个对象


module.exports = {

    entry: path.join(__dirname, './src/main.js'), //   entry 入口
    output: {                                     //   output 出口
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    plugins: [ //插件配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()

    ],
    module: {//配置第三方loader加载器
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.jpg|png|gif|bmp|jpeg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',  //打包出来的图片名字和后缀都和之前的一样
                        outputPath: "images/",
                        limit: 2048 ,//当图片大小超过2048个字节的时候，将打包的图片存在dist/images文件夹中，否则直接改为base64格式放在bundle.js中，可以减少http请求
                        esModule: false
                    }
                }
            },
            { test: /\.ttf|eot|svg|woff|woff2$/, use: 'url-loader' },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { "legacy": true }],
                            ['@babel/plugin-proposal-class-properties', { "loose": true }]
                        ]
                    }
                }
            },
            { test: /\.vue$/, use: 'vue-loader' }

        ]
    }
    /* resolve:{
        alias: {
            'vue$':'vue/dist/vue.js'
        }   //配置webpack 识别vue文件
    } */
}