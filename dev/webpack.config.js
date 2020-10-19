const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    vendors: [
      'vue'
    ],
    bundle: './src/assets/scripts/main.js'
  },
  output: {
    filename: '[name].js',
    path: '/'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      Utils: path.resolve(__dirname, '../src/assets/scripts/'),
      Styles: path.resolve(__dirname, '../app/assets/styles/'),
      '~': path.resolve(__dirname, '../src/components/')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          test: 'vendors',
          name: 'vendors',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
