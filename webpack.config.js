module.exports = {
    context:__dirname + '\\src',
    entry: './index.jsx',
    output:{
        path: __dirname + '\\bundle',
        filename: './index.bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};