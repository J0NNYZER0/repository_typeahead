const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.jsx'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 8081,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico|ttf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
            publicPath: '/'
          },
        }],
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'),
              ],
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
