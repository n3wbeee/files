/** @format */

import React from "react";
import { useWindowScroll } from "./useWindowScroll";

function App() {
	const [p] = useWindowScroll();
	return <div style={{ height: "12000px" }}>{[p]}</div>;
}

export default App;

