import {
	Accessor,
	Component,
	createSignal,
	For,
	Match,
	onCleanup,
	onMount,
	Setter,
	Switch,
} from "solid-js";

import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import chrome from "../assets/chrome.png";
import microsoft from "../assets/microsoft.png";

import { carouselData, StoreItems } from "../../data/carouselData";
import styles from "./Carousel.module.css";

export const GetStoreButton: Component<StoreItems> = ({ storeType, link }) => {
	return (
		<Switch fallback={<div>Not Found</div>}>
			<Match when={storeType === "chrome"}>
				<img src={chrome} onClick={() => window.open(link, "_blank").focus()} />
			</Match>
			<Match when={storeType === "edge"}>
				<img
					src={microsoft}
					onClick={() => window.open(link, "_blank").focus()}
				/>
			</Match>
			<Match when={storeType === "macOS"}>
				<img
					src={appstore}
					onClick={() => window.open(link, "_blank").focus()}
				/>
			</Match>
			<Match when={storeType === "play"}>
				<img
					src={playstore}
					onClick={() => window.open(link, "_blank").focus()}
				/>
			</Match>
		</Switch>
	);
};

const Carousel: Component = () => {
	const [selectedAppId, setSelectedAppId] = createSignal<number>(0);

	let intervalID: number;

	const interval = () => {
		intervalID = setInterval(() => {
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
				<img
					class={styles.carouselHero}
					src={carouselData[selectedAppId()].heroThumb}
				/>
				<div
					class={styles.carouselDetails}
					style={{ color: carouselData[selectedAppId()].fontColor ?? "white" }}>
					<h1>{carouselData[selectedAppId()].title}</h1>
					<p>
						{carouselData[selectedAppId()].description} <br />
						<a
							style={{
								color: carouselData[selectedAppId()].fontColor ?? "white",
							}}
							href={`/app/${carouselData[
								selectedAppId()
							].title.toLowerCase()}`}>
							Learn more -&gt;{" "}
						</a>{" "}
					</p>
					<div class={styles.storeLinks}>
						<For each={carouselData[selectedAppId()].storeLinks}>
							{(item) => GetStoreButton(item)}
						</For>
					</div>
				</div>
			</div>
			<div class={styles.strip}>
				<For each={carouselData}>
					{(item) => {
						return (
							<StripCard
								id={item.id}
								selectedID={selectedAppId}
								setSelectedID={setSelectedAppId}
								title={item.title}
								tag={item.tag}
								logo={item.icon}
							/>
						);
					}}
				</For>
			</div>
		</div>
	);
};

export const StripCard: Component<{
	id: number;
	logo: string;
	title: string;
	tag: string;
	selectedID: Accessor<number>;
	setSelectedID: Setter<number>;
}> = ({ id, logo, title, tag, selectedID, setSelectedID }) => {
	return (
		<div
			class={styles.stripCard}
			onClick={() => setSelectedID && setSelectedID(id)}
			style={{
				"background-color":
					selectedID && selectedID() === id ? "#BBDEFB" : "white",
			}}>
			<img src={logo} />
			<div class={styles.stripDetails}>
				<p>{title}</p>
				<p style={{ opacity: 0.6, "font-size": "12px" }}>{tag}</p>
			</div>
		</div>
	);
};

export default Carousel;
