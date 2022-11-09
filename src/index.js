/** @format */

//React: 框架核心
//ReactDOM: 渲染相关
import React from "react";
import ReactDOM from "react-dom";
//入口文件，作为全局样式
import "./index.css";
//引入根组件App
import App from "./App";
// 通过调用ReactDOM的render方法渲染App根组件到id为root的dom节点上
ReactDOM.render(<App />, document.getElementById("root"));
