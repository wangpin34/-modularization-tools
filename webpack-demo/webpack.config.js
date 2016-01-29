module.exports = {
    entry: "./web/entry.js",
    devtool:"source-map",
    output: {
        path: __dirname,
        filename: "./web/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
