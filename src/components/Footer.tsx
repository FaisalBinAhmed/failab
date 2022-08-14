import { Component } from "solid-js";
import { Link } from "@solidjs/router";

import styles from "./Footer.module.css";

import twitter from "../assets/twitter.svg";
import paypal from "../assets/paypal.svg";
import munich from "../assets/munich.png";

const Footer: Component<{}> = (props) => {
	const date = new Date().getFullYear();

	return (
		<div class={styles.container}>
			<div class={styles.logoContainer}>
				<img class={styles.socialLogo} src={twitter} />
				<img class={styles.socialLogo} src={paypal} />
			</div>
			<div class={styles.links}>
				<Link class={styles.link} href="/about">
					About
				</Link>
				<Link class={styles.link} href="/contact">
					Contact
				</Link>
				<Link class={styles.link} href="/contact">
					Imprint
				</Link>
			</div>
			<div class={styles.foot}>
				<div class={styles.copyright}>
					<p>FAILAB {date}</p>
					<p>MUNICH, DE</p>
				</div>
				<img src={munich} />
			</div>
		</div>
	);
};

export default Footer;
