module.exports = {
    entry: 'js/entry.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js'
    },
    resolve: {
        root: __dirname + '/src/',
        extensions: ['', '.js']
    }
};
