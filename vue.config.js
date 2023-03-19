const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: "http://1329204-cd04829.tw1.ru:8000"
    }
})