import type { Component } from "solid-js";

import styles from "./SocialButton.module.css";

const SocialButton: Component<{
	title: string;
	color: string;
	toExternal?: string;
	toInternal?: string;
}> = ({ title, color, toExternal, toInternal }) => {
	function handleClick() {
		if (toExternal) {
			window.open(toExternal, "_blank").focus();
			return;
		}
		if (toInternal) window.location = `/${toInternal}`;
	}

	return (
		<div
			class={styles.socialButton}
			onclick={handleClick}
			style={{ "border-color": color }}>
			<p style={{ color: color }}>{title}</p>
		</div>
	);
};

export default SocialButton;
