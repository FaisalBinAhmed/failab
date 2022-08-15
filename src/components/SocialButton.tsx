import { useNavigate } from "@solidjs/router";
import type { Component } from "solid-js";

import styles from "./SocialButton.module.css";

const SocialButton: Component<{
	title: string;
	color: string;
	toExternal?: string;
	toInternal?: string;
}> = ({ title, color, toExternal, toInternal }) => {
	const navigate = useNavigate();

	function handleClick() {
		if (toExternal) {
			window.open(toExternal, "_blank").focus();
			return;
		}
		if (toInternal) navigate(`/${toInternal}`);
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
