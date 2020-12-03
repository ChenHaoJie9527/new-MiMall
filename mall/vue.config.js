module.exports = {
    chainWebpack: config => {
        config
        .plugin("html")
        .tap(args => {
            args[0].title = "米米商场";
            return args;
        })
    },
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            "/api": {
                target: "http://mall-pre.springboot.cn",
                changeOrigin: true,
                pathRewrite: {
                    "/api": ""
                }
            }
        }
    }
}