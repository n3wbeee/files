/** @format */

import React from "react";

function SonFunc(props) {
	//props内存放的是父组件传递过来的数据
	//!!!注意：props是只读的，不能修改
	return (
		<div>
			测试--函数组件,{props.message}
			<button onClick={props.sonFunc}>调用父组件的方法</button>
			{props.childSpan}
		</div>
	);
}

class App extends React.Component {
	state = {
		message: "hello world",
	};
	FatherFunc = () => {
		console.log("调用父组件的方法");
	};
	render() {
		return (
			<div>
				<SonFunc
					message={this.state.message}
					sonFunc={this.FatherFunc}
					childSpan={<span>我是span</span>}
				/>
			</div>
		);
	}
}

export default App;

