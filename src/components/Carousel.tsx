import {
	Accessor,
	Component,
	createEffect,
	createSignal,
	onCleanup,
	onMount,
	Setter,
} from "solid-js";

import tabiusHero from "../assets/tabius/tabius-hero.png";
import tabiusLogo from "../assets/tabius/tabius-logo.jpeg";

import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

import { carouselData } from "../../data/carouselData";
import styles from "./Carousel.module.css";

const Carousel: Component = () => {
	const [selectedAppId, setSelectedAppId] = createSignal<number>(0);

	let intervalID: number;

	const interval = () => {
		intervalID = setInterval(() => {
			// console.log("currentID: ", selectedAppId());
			if (selectedAppId() === carouselData.length - 1) {
				setSelectedAppId(0);
			} else {
				setSelectedAppId(selectedAppId() + 1);
			}
		}, 5000);
	}; //changes the carousel every 5 sec

	onMount(() => {
		interval();
		onCleanup(() => clearInterval(intervalID)); //clears the timer on unmount
	});

	return (
		<div class={styles.carousel}>
			<div
				class={styles.mainCarouselContainer}
				style={{ "background-color": carouselData[selectedAppId()].color }}>
				<img class={styles.carouselHero} src={tabiusHero} />
				<div
					class={styles.carouselDetails}
					style={{ color: carouselData[selectedAppId()].fontColor ?? "white" }}>
					<h1>{carouselData[selectedAppId()].title}</h1>
					<p>{carouselData[selectedAppId()].description}</p>
					<div class={styles.storeLinks}>
						<img src={appstore} />
						<img src={playstore} />
					</div>
				</div>
			</div>
			<div class={styles.strip}>
				{carouselData.map((item) => {
					return (
						<StripCard
							id={item.id}
							selectedID={selectedAppId}
							setSelectedID={setSelectedAppId}
							title={item.title}
							tag={item.tag}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const StripCard: Component<{
	id: number;
	logo?: string;
	title: string;
	tag: string;
	selectedID?: Accessor<number>;
	setSelectedID?: Setter<number>;
}> = ({ id, logo, title, tag, selectedID, setSelectedID }) => {
	return (
		<div
			class={styles.stripCard}
			onClick={() => setSelectedID && setSelectedID(id)}
			style={{
				"background-color":
					selectedID && selectedID() === id ? "#fae7e1" : "white",
			}}>
			<img src={tabiusLogo} />
			<div class={styles.stripDetails}>
				<p>{title}</p>
				<p style={{ opacity: 0.6, "font-size": "12px" }}>{tag}</p>
			</div>
		</div>
	);
};

export default Carousel;
