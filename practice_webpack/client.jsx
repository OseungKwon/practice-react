// node의 모듈 시스템을 사용해
// npm에서 설치했던 것들을 불러옴
// const React = require("react");
// const ReactDom = require("react-dom");

// const WordRelay = require("./WordRelay");

import React from "react";
import ReactDom from "react-dom";
import TicTackToe from "./TicTackToe";
import WordRelay from "./WordRelay";

// ReactDom.render(<TicTackToe />, document.querySelector("#root"));
ReactDom.render(<WordRelay />, document.querySelector("#root"));
