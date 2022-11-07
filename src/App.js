/** @format */

import React from "react";

class InputComponent extends React.Component {
	state = {
		message: "This is Message", //状态
	};
	handleChange = (event) => {
		this.setState({
			message: event.target.value, //修改状态
		});
	};

	//UI渲染
	render() {
		return (
			<input
				type="text" //文本框
				value={this.state.message} //绑定状态
				onChange={this.handleChange} //绑定事件
			/>
		);
	}
}

function App() {
	return (
		<div>
			<InputComponent /> {/*引入组件*/}
		</div>
	);
}

export default App;

