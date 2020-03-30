/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 21:51:09
 * @copyright: Copyright (c) 2019, Hand
 */
module.exports = {
  devServer: {
    proxy: "http://localhost:4000" // 配置跨域代理
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    // 修复HMR失效问题？？？是为啥？
    config.resolve.symlinks = true;
  }
  // chainWebpack: config => {
  //   console.log(config);
  // },
  /* pluginOptions: {
    import: {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: true
    }
  }, */
  /* css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      },
      sass: {
        data: `@import "@/assets/styles/general.scss";`
      }
    }
  } */
  // chainWebpack(config) {
  // // 别名
  // config.resolve.alias
  //   .set('components', resolve('src/components'))
  //   .set('common', resolve('src/common'))
  //   .set('api', resolve('src/api'))
  // config.plugin('context')
  //   .use(webpack.ContextReplacementPlugin,
  //     [/moment[/\\]locale$/, /zh-cn/])
  // },
};
