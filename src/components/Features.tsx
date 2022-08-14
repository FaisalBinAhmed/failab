import { Component, For } from "solid-js";
import { CarouselItem, Feature } from "../../data/carouselData";

import styles from "./Features.module.css";

const Features: Component<{ features: Feature[] }> = ({ features }) => {
	return (
		<div class={styles.container}>
			<For each={features}>
				{(item, index) => (
					<FeatureCard
						index={index() + 1}
						title={item.title}
						description={item.description}
						color="blue"
					/>
				)}
			</For>
		</div>
	);
};

export default Features;

interface FeatureType {
	index: number;
	color: string;
}

const FeatureCard: Component<FeatureType & Feature> = ({
	index,
	title,
	description,
	color,
}) => {
	return (
		<div class={styles.featureCard}>
			<h1 style={{ color: color }}>
				{index}. {title}
			</h1>
			<p>{description}</p>
		</div>
	);
};
