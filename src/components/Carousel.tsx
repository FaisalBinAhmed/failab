import {
	Component,
	createEffect,
	createSignal,
	onCleanup,
	onMount,
} from "solid-js";

import tabiusHero from "../assets/tabius/tabius-hero.png";
import tabiusLogo from "../assets/tabius/tabius-logo.jpeg";

import styles from "./Carousel.module.css";

interface StoreItems {
	storeType: "macOS" | "chrome" | "edge" | "play";
	link: string;
}

interface CarouselItem {
	id: number;
	title: string;
	heroThumb: string;
	icon: string;
	description: string;
	color: string;
	storeLinks: StoreItems[] | StoreItems;
}

const dummyAppData: CarouselItem[] = [
	{
		id: 0,
		title: "Tabius",
		heroThumb: "assets/tabius.jpeg",
		icon: "assets/tabius-small.jpeg",
		description: "Tab Grouping Assistant for Chrome and Microsoft Edge",
		color: "blue",
		storeLinks: [
			{
				storeType: "chrome",
				link: "",
			},
			{
				storeType: "edge",
				link: "",
			},
		],
	},
	{
		id: 1,
		title: "Tabius",
		heroThumb: "assets/tabius.jpeg",
		icon: "assets/tabius-small.jpeg",
		description: "Tab Grouping Assistant for Chrome and Microsoft Edge",
		color: "#6b69d6",
		storeLinks: [
			{
				storeType: "chrome",
				link: "",
			},
			{
				storeType: "edge",
				link: "",
			},
		],
	},
];

const Carousel: Component = () => {
	const [selectedAppId, setSelectedAppId] = createSignal<number>(0);

	let intervalID: number;

	const interval = () => {
		intervalID = setInterval(() => {
			console.log("currentID: ", selectedAppId());
			if (selectedAppId() === dummyAppData.length - 1) {
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
		<div
			class={styles.mainCarouselContainer}
			style={{ "background-color": dummyAppData[selectedAppId()].color }}>
			<img class={styles.carouselHero} src={tabiusHero} />
			<div class={styles.carouselDetails}>
				<p>{dummyAppData[selectedAppId()].title}</p>
				<p>{dummyAppData[selectedAppId()].description}</p>
			</div>
		</div>
	);
};

export default Carousel;
