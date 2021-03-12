module.exports = {
    //    devServer: {
    //        https: true,
    //    },
    configureWebpack: {
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.(pdf)$/,
                    use: "file-loader?name=[path][name].[ext]",
                },
                {
                    test: /\.(mp3})$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]?[hash]",
                    },
                },
                {
                    test: /\.obj$/,
                    loader: "webpack-obj-loader",
                },
            ],
        },
    },
};
