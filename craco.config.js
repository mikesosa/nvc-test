// According to the Customize Theme documentation, we need to modify less variables via loader like less-loader. We can use craco-less to achieve that,
const cracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: cracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
