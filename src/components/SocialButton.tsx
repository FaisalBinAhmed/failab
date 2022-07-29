import type { Component } from "solid-js";

import styles from "./SocialButton.module.css";

const SocialButton: Component<{ title: string; color: string }> = ({
	title,
	color,
}) => {
	return (
		<div class={styles.socialButton} style={{ "border-color": color }}>
			<p style={{ color: color }}>{title}</p>
		</div>
	);
};

export default SocialButton;
