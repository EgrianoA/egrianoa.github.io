const withSass = require('@zeit/next-sass');
const isProd = (process.env.NODE_ENV || 'production') === 'production'
const assetPrefix = isProd ? '/personal-page-v2-dev' : ''
const webpack = require('webpack')
module.exports = withSass({
    devIndicators: {
        autoPrerender: false
    },
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            }),
        )
        return config;
    },
    exportPathMap: () => ({
        '/': { page: '/' },
    }),
    assetPrefix: assetPrefix,
});