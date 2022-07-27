import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Apps from "./screens/Apps";
import Contact from "./screens/Contact";
import About from "./screens/About";

const App: Component = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" component={HomeScreen} />
				<Route path="/apps" component={Apps} />
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={About} />
			</Routes>
		</>
	);
};

export default App;
