module.exports = {
    entry: {
        dist: __dirname + '/src/entry.js',
        demo: './index.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}