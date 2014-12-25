var webpack = require('webpack');

module.exports = {
    entry: 'js/entry.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js'
    },
    resolve: {
        root: __dirname + '/src/',
        modulesDirectories: [
            __dirname + '/bower_components/'
        ],
        extensions: ['', '.js', '.coffee']
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
    ],
    module: {
        loaders: [
            { test: /\.coffee$/, loader: 'coffee' }
        ]
    }
};
