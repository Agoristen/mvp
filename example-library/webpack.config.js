var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode : process.env.NODE_ENV,
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'vue-jstree.js',
    library: 'example-library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      //vue: path.resolve(`./node_modules/vue`) // Did not work (tried this: https://github.com/vuejs/core/issues/2064#issuecomment-797365133)
    },
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
    }),
  ],
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);

  module.exports.optimization = {
    minimize : false
  };
} else {
  module.exports.devServer = {
    static: {
      directory: path.join(__dirname, '/')
    },
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  }
}

