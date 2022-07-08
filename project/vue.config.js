const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: "127.0.0.1",
    port: "3100",
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        pathRewrite: { "^/api": "" },
        secure: false,
      },
    },
  },
  lintOnSave: false,
});
