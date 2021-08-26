const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실 서비스에는 production으로 바꾸면 된다
  devtool: "eval", // 빠르게 함
  resolve: {
    extensions: [".js", ".jsx"] // entriy>app에서 확장자 굳이 안쳐도 여기서 설정해놓으면 도미
  },

  /*중요 */
  // 입력(여러 컴포넌트들) <1. entry에 있는 파일을 읽고>
  entry: {
    app: ["./client"] // client.jsx에서 이미 WordRelay.jsx를 이미 불러왔기 때문에 하나만 써도 됨
  },

  // <2. module를 적용한 후,>
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"] //browserslist -> 나중에 잘 쓰일수도
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: []
        }
      }
    ]
  },
  plugins: [
    // 추가적으로 확장하고 싶은 경우 플러그인 사용
    new webpack.LoaderOptionsPlugin({ debug: true })
  ],
  // 출력(App.js) <3. output으로 뺀다>
  output: {
    path: path.join(__dirname, "dist"), // path.join 하면 경로를 합쳐줌(현재 폴더+dist)
    filename: "app.js"
  }
};
