/** @format */

import React from "react";
import PropTypes from "prop-types";

function Test({ list }) {
	return (
		<div>
			{/* 也许传入的list不是数组...?*/}
			{list.map((item) => (
				<p>{item}</p>
			))}
		</div>
	);
}
Test.propTypes = {
	list: PropTypes.array, // 限定list的类型为数组
};

class App extends React.Component {
	render() {
		return (
			<>
				<Test list={[1, 2, 3]} />
			</>
		);
	}
}

export default App;

