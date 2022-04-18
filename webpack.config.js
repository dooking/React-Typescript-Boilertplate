const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_module/,
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {},
};
// const path = require("path"); //절대경로를 참조하기 위해 path를 불러오기

// const HtmlWebpackPlugin = require("html-webpack-plugin"); //웹팩에서 HTML을 다루기위한 플로그인을 불러오기

// module.exports = {
//   // 번들 파일로 만들기 위한 시작 파일(entry)을 설정
//   //생성될 번들 파일은 js 폴더 하위에 app.js라는 이름으로 생성
//   //이 파일은 ./src/App.jsx를 시작으로 번들링(하나로 합치기)합니다.
//   entry: {
//     "js/app": ["./src/app.tsx"],
//   },

//   //생성된 번들 파일(bundle)은 ./dist/ 폴더에 생성
//   //publicPath를 지정함으로써 HTML등 다른 파일에서 생성된 번들을 참조할 때, /을 기준으로 참조
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/",
//   },

//   //React(리액트) 파일인 jsx와 js는 babel(바벨)을 이용하여 빌드
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         use: ["babel-loader"],
//         exclude: /node_modules/,
//       },
//     ],
//   },

//   //./src/index.html 파일을 dist 경로에 index.html로 파일을 생성
//   //파일을 생성할 때, Webpack(웹팩)이 만든 번들 파일(/js/app.js)를 HTML에 추가하여 생성
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       filename: "index.html",
//     }),
//   ],
// };
