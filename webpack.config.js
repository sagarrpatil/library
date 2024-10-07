// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Adjust based on your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add presets for ES6 and React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist', // Serve content from the dist directory
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Create an HTML file from template
    }),
  ],
};
