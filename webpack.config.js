import webpack from 'webpack';
import path from 'path';

const config = {
    entry: './react/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style', 'css'], exclude: /node_modules/},
            {test: /\.jsx$/, loaders: ['babel-loader']}
        ]
    }
};

export default config;