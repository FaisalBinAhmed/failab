import { NavLink } from "@solidjs/router";
import type { Component } from "solid-js";

import styles from "./Header.module.css";

const Header: Component = () => {
	return (
		<>
			<div>
				<nav class={styles.header}>
					<NavLink
						class={styles.headerButton}
						activeClass={styles.headerButtonActive}
						href="/">
						Home
					</NavLink>
					<NavLink class={styles.headerButton} href="/apps">
						Apps
					</NavLink>
					<NavLink class={styles.headerButton} href="/contact">
						Contact
					</NavLink>
					<NavLink class={styles.headerButton} href="/about">
						About
					</NavLink>
				</nav>
				{/* <HeaderButton name="About" />
				<HeaderButton name="Contact" />
				<HeaderButton name="Apps" />
				<HeaderButton name="Home" /> */}
			</div>
		</>
	);
};

export default Header;

interface HeaderButtonType {
	name: string;
}

export const HeaderButton: Component<HeaderButtonType> = ({ name }) => {
	function onHeaderClick() {}
	return (
		<div onClick={onHeaderClick} class={styles.headerButton}>
			{name}
		</div>
	);
};
