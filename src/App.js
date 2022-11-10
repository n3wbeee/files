/** @format */

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Article from "./Article";
import Layout from "./Layout";
import Board from "./Board";
import About from "./about";

function App() {
	return (
		// 声明路由
		<BrowserRouter>
			{/* 声明路由组件,to属性是路由地址*/}
			<Link to="/">Layout</Link>
			<Link to="/Article">Article</Link>
			{/*路由出口: 路由对应的组件会在这里进行渲染*/}
			{/*path为路径,element为组件，需要成对出现*/}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/article" element={<Article />} />
					<Route path="/board" element={<Board />} />
				</Route>
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

