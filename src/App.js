/** @format */

import React from "react";

//子组件（函数）
function SonFunc(props) {
	//props内存放的是父组件传递过来的数据
	//!!!注意：props是只读的，不能修改
	return <div>测试--函数组件,{props.message}</div>;
}

//子组件（类）
class SonClass extends React.Component {
	render() {
		return <div>测试--类组件,{this.props.message}</div>;
	}
}

class App extends React.Component {
	state = {
		message: "hello world",
	};
	render() {
		return (
			<div>
				<SonFunc message={this.state.message} />
				<SonClass message={this.state.message} />
			</div>
		);
	}
}

export default App;

