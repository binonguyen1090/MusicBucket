const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js?$/,
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-env"]
            },
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    watch: true
};