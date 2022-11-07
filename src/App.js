/** @format */

import React from "react";

class TestComponent extends React.Component {
	// 通过state定义组件状态
	state = {
		counter: 0,
	};
	render() {
		return (
			<button
				onClick={() => {
					this.setState({ counter: this.state.counter + 1 });
				}}>
				{this.state.counter}Click
			</button>
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

