/** @format */

import React from "react";

class TestComponent extends React.Component {
	//定义组件状态
	state = {
		name: "test",
	};
	//修改组件状态
	changeStateName = () => {
		if (this.state.name === "test") {
			this.setState({
				name: "test1",
			});
		} else {
			this.setState({
				name: "test",
			});
		}
	};
	render() {
		//使用组件状态
		return (
			<div>
				This Is Test Component 当前状态为: {this.state.name}
				<button onClick={this.changeStateName}>修改状态</button>
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<TestComponent />
		</div>
	);
}

export default App;

