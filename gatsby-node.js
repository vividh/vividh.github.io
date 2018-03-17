// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   // extract css file
//   // config.removeLoader('css');
//   config.loader('css', {
//     test: /\.s?css/,
//     loader: 'css?minimize!sass'
//   });
//   // config.plugin('extract-css', ExtractTextPlugin, ['main.css', { allChunks: true }]);
  
//   return config;
// };