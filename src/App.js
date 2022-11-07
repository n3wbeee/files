/** @format */

import React, { createRef } from "react";

class Input extends React.Component {
	msgRef = createRef();

	getValue = () => {
		//获取子组件的值
		console.log(this.msgRef.current.value);
	};

	changeValue = () => {
		//修改子组件的值
		this.msgRef.current.value = "hello";
	};

	render() {
		return (
			<>
				<input type={"test"} ref={this.msgRef} />
				<button onClick={this.getValue}>获取子组件的值</button>
				<button onClick={this.changeValue}>修改子组件的值</button>
			</>
		);
	}
}

function App() {
	return (
		<div>
			<Input /> {/*引入组件*/}
		</div>
	);
}

export default App;

