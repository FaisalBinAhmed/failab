import type { Component } from "solid-js";
import Header from "../components/Header";

import styles from "./HomeScreen.module.css";

const HomeScreen: Component = () => {
	return (
		<div class={styles.App}>
			<Header />
		</div>
	);
};

export default HomeScreen;
