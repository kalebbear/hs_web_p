module.exports = {
    publicPath: './dist/',
    publicPath: './',
    // mode: 'history',
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 9000,
        proxy: {
            '/api/': {
                // target: 'http://127.0.0.1:8088',   // 测试环境
                target: 'http://81.71.17.188:8088', // 产线地址
                changeOrigin: true,  // 是否跨域
                pathRewrite: {
                    '^/api/': ''
                }
            },
        },
    },
    productionSourceMap: false,
    css: {
        loaderOptions: {


            less: {


                // 这里可以添加全局的Less变量、混合等配置


                lessOptions: {


                    modifyVars: {


                        // 配置全局变量


                        'primary-color': '#42b983',


                    },


                    javascriptEnabled: true,


                },


            },


        },
    },

    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '华赛';
                return args;
            });
        config.module

            .rule("images")

            .use("image-webpack-loader")

            .loader("image-webpack-loader")

            .options({

                mozjpeg: {
                    quality: 50
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                    quality: 50
                }

            })

            .end();
    }
}
// module.exports = {
//     publicPath: 'https://kalebbear.github.io/dist/',
//     css: {


//         loaderOptions: {


//             less: {


//                 // 这里可以添加全局的Less变量、混合等配置


//                 lessOptions: {


//                     modifyVars: {


//                         // 配置全局变量


//                         'primary-color': '#42b983',


//                     },


//                     javascriptEnabled: true,


//                 },


//             },


//         },


//     },


// };