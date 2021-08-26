// node의 모듈 시스템을 사용해
// npm에서 설치했던 것들을 불러옴
const React = require("react");
const ReactDom = require("react-dom");

const WordRelay = require("./WordRelay");

ReactDom.render(<WordRelay />, document.querySelector("#root"));
