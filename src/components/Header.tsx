import { NavLink } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import { carouselData } from "../../data/carouselData";
import { StripCard } from "./Carousel";

import styles from "./Header.module.css";

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
								<StripCard
									id={item.id}
									// selectedID={()=>{})}
									// setSelectedID={setSelectedAppId}
									title={item.title}
									tag={item.tag}
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
