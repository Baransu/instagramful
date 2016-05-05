var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PRODUCTION = true;

module.exports = {
  devtool: 'eval',
  entry: !PRODUCTION ? [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ]: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'index.html' },
      {
        from: {
          glob:'images/**/*',
          dot: true
        },
      },
      {
        from: {
          glob:'css/*',
          dot: true
        },
      },
      {
        from: {
          glob:'fonts/**/*',
          dot: true
        },
      },
    ])
  ],
  module: {
    loaders: [{
      test: /(\.js$|\.jsx$)/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
