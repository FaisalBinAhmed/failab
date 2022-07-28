import type { Component } from "solid-js";
import failogo from "../assets/failab.webp";

import styles from "./HomeScreen.module.css";

const HomeScreen: Component = () => {
	return (
		<div class={styles.App}>
			<div class={styles.hero}>
				<img src={failogo} height={200} width={200} />
				<div>
					<h1>Failab</h1>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
