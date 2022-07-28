import type { Component } from "solid-js";
import failogo from "../assets/failab.webp";

import styles from "./HomeScreen.module.css";

const HomeScreen: Component = () => {
	return (
		<div class={styles.App}>
			<div class={styles.hero}>
				<img class={styles.heroLogo} src={failogo} />
				<div class={styles.heroText}>
					<p class={styles.heroTitle}>Failab</p>
					<p>insert subtitle here</p>
					<p>insert social links</p>
				</div>
			</div>
			<div class={styles.carouselContainer}></div>
		</div>
	);
};

export default HomeScreen;
