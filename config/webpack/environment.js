const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
);

const aliasConfig = {
	'jquery': 'jquery/dist/jquery.min.js',
	$: 'jquery/dist/jquery.min.js',
};

environment.config.set('resolve.alias', aliasConfig);

module.exports = environment
