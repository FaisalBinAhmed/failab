import type { Component } from "solid-js";

import styles from "./Features.module.css";

const Features: Component = () => {
	return <div class={styles.container}></div>;
};

export default Features;

interface FeatureType {
	index: number;
	title: string;
	description: string;
	color: string;
}

const FeatureCard: Component<FeatureType> = ({
	index,
	title,
	description,
	color,
}) => {
	return (
		<div>
			<h1 style={{ backgroundColor: color }}>
				{index}. {title}
			</h1>
			<p>{description}</p>
		</div>
	);
};
