/** @format */

import React, { createContext } from "react";

const { Provider, Consumer } = createContext();

function ComA() {
	return (
		<div>
			this is ComA
			<ComC />
		</div>
	);
}

function ComC() {
	return (
		<div>
			<Consumer>{(value) => <span>{value}</span>}</Consumer>
			ComC
		</div>
	);
}

class App extends React.Component {
	state = {
		message: "hello world",
	};
	render() {
		return (
			<Provider value={this.state.message}>
				<ComA />
			</Provider>
		);
	}
}

export default App;

