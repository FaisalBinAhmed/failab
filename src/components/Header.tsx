import { NavLink } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import { carouselData } from "../../data/carouselData";
import { StripCard } from "./Carousel";

import styles from "./Header.module.css";
import tabiusLogo from "../assets/tabius/tabius-logo.jpeg";

const Header: Component = () => {
	const [applistOpen, setApplistOpen] = createSignal(false);

	function toggleApplist() {
		setApplistOpen(!applistOpen());
	}

	return (
		<>
			<div>
				<nav class={styles.header}>
					<NavLink
						class={styles.headerButton}
						activeClass={styles.headerButtonActive}
						end
						href="/">
						Home
					</NavLink>
					<p
						class={styles.headerButton}
						onClick={toggleApplist}
						style={{ color: applistOpen() ? "red" : "inherit" }}>
						Apps
					</p>
					<NavLink
						class={styles.headerButton}
						activeClass={styles.headerButtonActive}
						href="/contact">
						Contact
					</NavLink>
					<NavLink
						class={styles.headerButton}
						activeClass={styles.headerButtonActive}
						href="/about">
						About
					</NavLink>
				</nav>
				{applistOpen() && (
					<div class={styles.strip}>
						{carouselData.map((item) => {
							return (
								<HeaderAppCard
									id={item.id}
									title={item.title}
									tag={item.tag}
									logo={item.icon}
								/>
							);
						})}
					</div>
				)}
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

export const HeaderAppCard: Component<{
	id: number;
	logo: string;
	title: string;
	tag: string;
}> = ({ id, logo, title, tag }) => {
	return (
		<div
			class={styles.stripCard}
			onClick={() => (window.location = `/app/${title.toLowerCase()}`)}>
			<img src={logo} />
			<div class={styles.stripDetails}>
				<p>{title}</p>
				<p style={{ opacity: 0.6, "font-size": "12px" }}>{tag}</p>
			</div>
		</div>
	);
};
