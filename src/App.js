/** @format */

import React from "react";

//显示message
function Link() {
	const clickHandler = (msg) => {
		console.log(msg); //打印msg
	};
	return <div onClick={() => clickHandler("Test Message")}>打印Message</div>;
}

function App() {
	return (
		<div>
			<Link />
		</div>
	);
}

export default App;

