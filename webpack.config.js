const path = require("path");
const outputRootPath = path.resolve(__dirname, "app");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(outputRootPath, "scripts")
    },
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        //  inlineかiframeのどっちのモードで動作させるか
        //  iframeだとビルドに関するメッセージが画面に表示されるとかかな
        //  モードによってライブリロードが有効になるURLが変わるので注意
        //  inline: http://localhost:8080/
        //  iframe: http://localhost:8080/webpack-dev-server/
        //  あとデフォルトでinlineになってるらしいけどこれかかないと有効にならなくない……？
        inline: true,
        //  ルートにするディレクトリ
        contentBase: outputRootPath,
        //  バンドルしたファイルの書き出し先
        //  デフォルトは / になっているので localhost/bundle.js でアクセスできる
        //  webpack の output.path と合わせるのが自然
        publicPath: "/scripts/",
        //  watchBase内の静的ファイルもwatchの対象に
        watchContentBase: true,
        //  "コンパイルエラー"が出たときにオーバーレイで表示するか
        overlay: true,
        //  デフォルトはバンドルしたファイルはメモリに存在するので
        //  それをファイルに書き出すか
        // writeToDisk: true,
    }
};
