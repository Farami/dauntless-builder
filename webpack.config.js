const path = require("path");

module.exports = {
    entry: "./src/App.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        libraryTarget: "umd",
        filename: "dauntless-builder.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react"]
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            path.join(__dirname, "data"),
            "node_modules"
        ],
        extensions: [".js", ".jsx"]
    }
}
