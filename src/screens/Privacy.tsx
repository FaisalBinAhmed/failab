import { useParams } from "@solidjs/router";
import { Component } from "solid-js";

import { carouselData } from "../../data/carouselData";
import { isBadRoute } from "./AppDetails";

import styles from "./Privacy.module.css";

const Privacy: Component<{}> = (props) => {
	const params = useParams();

	//TODO redirect to 404 page
	if (isBadRoute(params.id)) return <div>404 Bad Route</div>;

	const appData = carouselData.find(
		(item) => item.title.toLowerCase() === params.id
	);

	return (
		<div class={styles.container}>
			<h1>Privacy Policy for {appData?.title.toUpperCase()}</h1>
			<div style={{ "white-space": "pre-wrap" }}>
				{appData?.privacyInfo?.data}
			</div>
			<div>
				<p>Last Updated:</p>
				<p>{appData?.privacyInfo?.lastDate}</p>
			</div>
		</div>
	);
};

export default Privacy;
