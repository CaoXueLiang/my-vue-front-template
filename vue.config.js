
module.exports = {
  chainWebpack: (config) => {
    // vue don't use cache-loader
    config.module.rule("vue").uses.delete("cache-loader");

    // js don't use cache-loader
    config.module.rule("js").uses.delete("cache-loader");
  },
  
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
