import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import styles from "./App.module.css";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Apps from "./screens/Apps";
import Contact from "./screens/Contact";
import About from "./screens/About";
import AppDetails from "./screens/AppDetails";
import Footer from "./components/Footer";
import Privacy from "./screens/Privacy";

const App: Component = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" component={HomeScreen} />
				<Route path="/apps" component={Apps} />
				<Route path="/app/:id" component={AppDetails} />
				<Route path="/app/:id/privacypolicy" component={Privacy} />
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={About} />
			</Routes>
			<div class={styles.footerContainer}>
				<Footer />
			</div>
		</>
	);
};

export default App;
