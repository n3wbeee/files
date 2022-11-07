/** @format */

import React from "react";

//阻止默认事件行为
function Link() {
	function handleClick(e) {
		e.preventDefault(); //阻止默认事件行为
		console.log("The link was clicked."); //打印日志
	}
	return (
		<div>
			<a onClick={handleClick} href="https://www.baidu.com">
				百度
			</a>
		</div>
	);
}

function App() {
	return (
		<div>
			<Link />
		</div>
	);
}

export default App;

