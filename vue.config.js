/*
 * @Author: your name
 * @Date: 2020-06-10 09:04:14
 * @LastEditTime: 2020-06-11 15:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /contractorForegroundUat/vue.config.js
 */
// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  chainWebpack: (config) => {
    // const eslintConfig = config.module.rule('eslint');
    // eslintConfig.use('eslint-loader')
    //   .loader('eslint-loader')
    //   .tap((args) => {
    //     const opt = { ...args };
    //     opt.cache = false;
    //     return opt;
    //   });

    // vue don't use cache-loader
    config.module.rule("vue").uses.delete("cache-loader");

    // js don't use cache-loader
    config.module.rule("js").uses.delete("cache-loader");
  },
  // configureWebpack: {
  //   /* 打包时开启GZIP压缩 */
  //   plugins: [
  //     new CompressionPlugin({
  //           algorithm: 'gzip', // 使用gzip压缩
  //           test: /\.js$|\.html$|\.css$/, // 匹配文件名
  //           filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
  //           minRatio: 1, // 压缩率小于1才会压缩
  //           threshold: 10240, // 对超过10k的数据压缩
  //           deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
  //     }),
  //   ]
  // },
  // sourcemap是为了方便在生产环境中调试的，因为生产环境的代码都是经过压缩的，看代码会很不方便，而sourcemap相当于是源代码的索引
  // ，可以直接定位到源代码出现bug的位置。但是，每个js文件都会带一个sourcemap，而有时候sourcemap文件又会很大，而导致拖慢首屏加载，
  // 所以我们在这里将它关掉。
  productionSourceMap: false,

  lintOnSave: false,

  devServer: {
    // When using inline mode, the console in your DevTools will show you messages e.g. before reloading
    clientLogLevel: "warning",
    // Enable webpack's Hot Module Replacement feature
    hot: true,
    // Tells dev-server to open the browser after server had been started.
    open: true,
    port: 8181,
    // Shows a full-screen overlay in the browser when there are compiler errors, compiler warnings don't show overlay.
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};
