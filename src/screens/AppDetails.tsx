import { useParams } from "@solidjs/router";
import {
	Accessor,
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

import { GetStoreButton } from "../components/Carousel";
import Features from "../components/Features";

export function isBadRoute(id: string) {
	if (appNames.includes(id)) return false;
	return true;
}

const AppDetails: Component = () => {
	const [appDetails, setAppDetails] = createSignal<CarouselItem>();

	const params = useParams();

	//TODO redirect to 404 page
	if (isBadRoute(params.id)) return <div>404 Bad Route</div>;
	createEffect(() => {
		// console.log("current param: ", params.id);

		const appData = carouselData.find(
			(item) => item.title.toLowerCase() === params.id
		);

		setAppDetails(appData);
	});

	return (
		<div style={{ overflow: "hidden" }}>
			<div class={styles.container}>
				<div class={styles.appDetails}>
					<img src={appDetails()?.icon} />
					<div class={styles.carouselDetails}>
						<h1>{appDetails()?.title}</h1>
						<p>{appDetails()?.description}</p>
						<div class={styles.storeLinks}>
							<For each={appDetails()?.storeLinks}>
								{(item) => GetStoreButton(item)}
							</For>
						</div>
					</div>
				</div>
				<div class={styles.mainImage}>
					<img src={appDetails()?.heroThumb} />
				</div>
			</div>
			<div class={styles.gallery}>
				<Gallery appDetails={appDetails} />
			</div>
			{appDetails()?.featurelist && (
				<div class={styles.features}>
					<Features appDetails={appDetails} />
				</div>
			)}
		</div>
	);
};

export default AppDetails;

const Gallery: Component<{ appDetails: Accessor<CarouselItem> }> = ({
	appDetails,
}) => {
	return (
		<div class={styles.gallery}>
			<div class={styles.galleryContainer}>
				{appDetails()?.screenshots && (
					<For each={appDetails().screenshots}>
						{(item, index) => (
							<div class={styles.galleryItem}>
								<img class={styles.galleryCurrentPic} src={item.path} />
								<div class={styles.galleryDetails}>
									<p>{item.description}</p>
								</div>
							</div>
						)}
					</For>
				)}
			</div>
		</div>
	);
};
