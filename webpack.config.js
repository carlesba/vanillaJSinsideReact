module.exports = {
  devtool: 'inline-source-map',
  debug: true,
  cache: false,
  process: true,
  stats: {
    colors: true
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    publicPath: '/dist/'
  },
  resolve: {
    root: './',
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
