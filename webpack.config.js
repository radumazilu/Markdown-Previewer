var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/index.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
    }
  ]
  }
};
