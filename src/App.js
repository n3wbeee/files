/** @format */

import React, { useState } from "react";

function Counter({ start }) {
	const [count, setCount] = useState(() => {
		return start;
	});
	return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
	return (
		<div>
			<Counter start={0} />
			<Counter start={10} />
		</div>
	);
}

export default App;
