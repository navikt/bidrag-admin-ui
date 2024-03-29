const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common.config.js");
const { EnvironmentPlugin } = require("webpack");

module.exports = merge(webpackCommon, {
    mode: "production",
    plugins: [
        // Defined as variable: default-value
        new EnvironmentPlugin({
            STATIC_FILES_URL: "",
            BIDRAG_VEDTAK_URL: "",
            BIDRAG_BEHANDLING_URL: "",
            UNLEASH_FRONTEND_TOKEN: "",
            UNLEASH_API_URL: "",
        }),
    ],
});
