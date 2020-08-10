const { environment } = require('@rails/webpacker')

const webpack = require('webpack');

environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jqurey',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

module.exports = environment
