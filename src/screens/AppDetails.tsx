import { useParams } from "@solidjs/router";
import type { Component } from "solid-js";
import { appNames, carouselData } from "../../data/carouselData";

import styles from "./AppDetails.module.css";

import tabiusLogo from "../assets/tabius/tabius-logo.jpeg";
import tabiusHero from "../assets/tabius/tabius-hero.png";

import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

function isBadRoute(id: string) {
	if (appNames.includes(id)) return false;
	return true;
}

const AppDetails: Component = () => {
	const params = useParams();

	if (isBadRoute(params.id)) return <div>404 Bad Route</div>;

	const appDetails = carouselData.find(
		(item) => item.title.toLowerCase() === params.id
	);

	return (
		<div class={styles.container}>
			<div class={styles.appDetails}>
				<img src={tabiusLogo} />
				<div class={styles.carouselDetails}>
					<h1>{appDetails?.title}</h1>
					<p>{appDetails?.description}</p>
					<div class={styles.storeLinks}>
						<img src={appstore} />
						<img src={playstore} />
					</div>
				</div>
			</div>
			<div class={styles.mainImage}>
				<img src={tabiusHero} />
			</div>
		</div>
	);
};

export default AppDetails;
