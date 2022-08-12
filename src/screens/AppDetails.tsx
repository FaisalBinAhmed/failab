import { useParams } from "@solidjs/router";
import {
	Component,
	createEffect,
	createRenderEffect,
	createSignal,
	For,
	onCleanup,
	onMount,
} from "solid-js";
import { appNames, carouselData, CarouselItem } from "../../data/carouselData";

import styles from "./AppDetails.module.css";

import tabiusLogo from "../assets/tabius/tabius-logo.jpeg";
import tabiusHero from "../assets/tabius/tabius-hero.png";

import ts1 from "../assets/trilby/ts1.png";

import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import { GetStoreButton } from "../components/Carousel";

function isBadRoute(id: string) {
	if (appNames.includes(id)) return false;
	return true;
}

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

const AppDetails: Component = () => {
	const params = useParams();

	if (isBadRoute(params.id)) return <div>404 Bad Route</div>;

	const appDetails = carouselData.find(
		(item) => item.title.toLowerCase() === params.id
	);

	return (
		<div style={{ overflow: "hidden" }}>
			<div class={styles.container}>
				<div class={styles.appDetails}>
					<img src={appDetails?.icon} />
					<div class={styles.carouselDetails}>
						<h1>{appDetails?.title}</h1>
						<p>{appDetails?.description}</p>
						<div class={styles.storeLinks}>
							<For each={appDetails?.storeLinks}>
								{(item) => GetStoreButton(item)}
							</For>
						</div>
					</div>
				</div>
				<div class={styles.mainImage}>
					<img src={appDetails?.heroThumb} />
				</div>
			</div>
			<div class={styles.gallery}>
				<Gallery appDetails={appDetails} />
			</div>
			<div class={styles.features}></div>
		</div>
	);
};

export default AppDetails;

const Gallery: Component<{ appDetails: CarouselItem }> = ({ appDetails }) => {
	const [selectedImageNumber, setSelectedImageNumber] = createSignal<number>(0);

	// const [windowDimensions, setWindowDimensions] = createSignal(
	// 	getWindowDimensions()
	// );

	// createRenderEffect(() => {
	// 	function handleResize() {
	// 		setWindowDimensions(getWindowDimensions());
	// 	}

	// 	window.addEventListener("resize", handleResize);
	// 	onCleanup(() => window.removeEventListener("resize", handleResize));
	// });

	let intervalID: number;

	const interval = () => {
		intervalID = setInterval(() => {
			// console.log("currentID: ", selectedAppId());
			if (selectedImageNumber() === appDetails.screenshots.length - 1) {
				setSelectedImageNumber(0);
			} else {
				setSelectedImageNumber(selectedImageNumber() + 1);
			}
		}, 5000);
	}; //changes the gallery every 5 sec

	onMount(() => {
		interval();
		onCleanup(() => clearInterval(intervalID)); //clears the timer on unmount
	});

	return (
		<div class={styles.gallery}>
			{/* <div class={styles.imageButtonContainer}>
				{appDetails.screenshots.map((item, index) => {
					return (
						<div
							style={{
								"background-color":
									index === selectedImageNumber() ? "white" : "inherit",
							}}
							onClick={() => setSelectedImageNumber(index)}
							class={styles.imageButton}>
							{index + 1}
						</div>
					);
				})}
			</div> */}
			<div class={styles.galleryContainer}>
				<For each={appDetails.screenshots}>
					{(item, index) => (
						<div class={styles.galleryItem}>
							<img class={styles.galleryCurrentPic} src={item.path} />
							<div class={styles.galleryDetails}>
								<p>{item.description}</p>
							</div>
						</div>
					)}
				</For>
			</div>
		</div>
	);
};
