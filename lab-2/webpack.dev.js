const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {

    devtool: 'eval',

    devServer: {
        stats: 'errors-only'
    }

})