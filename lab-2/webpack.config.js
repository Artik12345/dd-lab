
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'stage-2']
                    }
                },
                exclude: /node_modules/,
                
            }
        ]
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: path.join(__dirname, 'src', 'index.html')
          })
      ],
      devServer: {
          stats: 'errors-only'
      }
}