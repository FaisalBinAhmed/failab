import type { Component } from "solid-js";

import styles from "./Feedback.module.css";

const Feedback: Component = () => {
	return (
		<div class={styles.container}>
			<h2>What people are saying ☺</h2>
			<div class={styles.topContainer}>
				<FeedbackCard
					name="Benjamin -> Tabius"
					stars={5}
					review="This is exactly the extension I needed, an extension that would auto-group tabs with Chrome's Tab Groups feature. I love the function where it groups tabs based on the same opening tab. Life-saver. Thanks for making this extension!"
				/>
				<FeedbackCard
					name="Jue Fei -> Trilby"
					stars={5}
					review="Simple, customizable and functional for reading HN! Amazing first release! (:"
				/>
			</div>
			<div class={styles.bottomContainer}>
				<FeedbackCard
					name="Klunkstein -> Scaler"
					stars={5}
					review="Discovered the tool via Reddit. Simple and informative. Just the way I want it to be."
				/>
				<FeedbackCard
					name="Throvn -> KeyTrails"
					stars={5}
					review="This is app just happens to be the perfect solution for my youtube tutorials. It's easy to set up and looks beautiful. It has a lot of customizations but also good looking predefined themes available, that you can just start typing right away."
				/>
			</div>
		</div>
	);
};

export default Feedback;

interface FeedbackProp {
	name: string;
	stars: 1 | 2 | 3 | 4 | 5;
	review: string;
}

const FeedbackCard: Component<FeedbackProp> = ({ name, stars, review }) => {
	return (
		<div class={styles.cardContainer}>
			<div class={styles.cardHeader}>
				<div style={{ color: "grey" }}>{name}</div>
				<div>{[...Array(stars)].map((item) => "★")}</div>
			</div>
			<div class={styles.cardFooter}>{review}</div>
		</div>
	);
};
