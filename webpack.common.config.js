const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[fullhash].js",
        path: path.resolve(__dirname, "./dist"),
    },
    experiments: {
        topLevelAwait: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.([jt]sx?)?$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    target: "ESNext",
                },
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser.js",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[fullhash].css",
            ignoreOrder: true,
        }),
        new ModuleFederationPlugin({
            name: "bidrag_admin_ui",
            filename: "remoteEntry.js",
            exposes: {
                "./Admin": "./src/app.tsx",
            },
            shared: {
                react: { singleton: true, requiredVersion: deps.react },
                "react-dom": { singleton: true, requiredVersion: deps.react },
            },
        }),
    ],
};
