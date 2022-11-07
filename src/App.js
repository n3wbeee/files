import { render } from "@testing-library/react";
import React from "react";

function HelloClick() {
	function clickHandler() {
		window.alert("事件触发");
	}
	return <div onClick = { clickHandler }>Hello~</div>
}

class HelloComponent extends React.Component {
	clickHandler = ()=> {
		window.alert("类组件事件触发");
	}
	render() {
		return <div onClick = { this.clickHandler }>ClassComponent</div>
	}
}

function App() {
  	return (
    	<div>
			<HelloClick/>
			<HelloComponent/>
    	</div>
  	);
}

export default App;
