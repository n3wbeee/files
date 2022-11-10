/** @format */

import { counterStore } from "./store/counter.js";
import { observer } from "mobx-react";
import React from "react";

function App() {
	return (
		<>
			{counterStore.count}
			<button onClick={counterStore.addCount}>+1</button>
		</>
	);
}

export default observer(App);

