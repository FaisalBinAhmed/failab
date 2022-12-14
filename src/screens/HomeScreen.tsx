import type { Component } from "solid-js";
import failogo from "../Failab.svg";
import Carousel from "../components/Carousel";
import SocialButton from "../components/SocialButton";

import styles from "./HomeScreen.module.css";
import Feedback from "../components/Feedback";

const HomeScreen: Component = () => {
	return (
		<div class={styles.App}>
			<div class={styles.hero}>
				<img class={styles.heroLogo} src={failogo} />
				<div class={styles.heroText}>
					<p class={styles.heroTitle}>Failab</p>
					<p class={styles.subtitle}>
						Hobby projects + commercial app quality = Failab Apps
					</p>
					<div class={styles.socialContainer}>
						<SocialButton
							title="Follow Us"
							color="blue"
							toExternal="https://twitter.com/failab_eu"
						/>
						<SocialButton title="Contact" color="green" toInternal="contact" />
					</div>
				</div>
			</div>
			<div class={styles.carouselContainer}>
				<Carousel />
			</div>

			<div class={styles.feedbackContainer}>
				<Feedback />
			</div>
		</div>
	);
};

export default HomeScreen;
