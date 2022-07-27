import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import HomeScreen from "./screens/HomeScreen";

const App: Component = () => {
	return (
		<Routes>
			<Route path="/" component={HomeScreen} />
		</Routes>
	);
};

export default App;
