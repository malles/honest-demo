const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        'gamedevelopment': './src/gamedevelopment.js',
    },
    output: {
        path: __dirname + '/public',
        filename: './js/app.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
    ],
};