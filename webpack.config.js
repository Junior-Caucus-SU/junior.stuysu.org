import path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./src/componets/index.css",
            chunkFilename: "index.css"
        }),
        new MiniCssExtractPlugin({
            filename: "./src/componets/Nav.css",
            chunkFilename: "Nav.css"
        }),
        new MiniCssExtractPlugin({
            filename: "./src/componets/Banner.css",
            chunkFilename: "Banner.css"
        }),
    ]
};