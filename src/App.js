/** @format */

import React from "react";

function SonFunc({ getSonMessage }) {
	return <button onClick={() => getSonMessage("来自子组件")}>子组件</button>; //子组件向父组件传值
}

class App extends React.Component {
	getSonMessage = (message) => {
		console.log(message);
	};

	render() {
		return (
			<>
				<SonFunc getSonMessage={this.getSonMessage} />
			</>
		);
	}
}

export default App;
