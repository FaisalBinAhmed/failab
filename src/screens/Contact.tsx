import type { Component } from "solid-js";

import styles from "./Contact.module.css";

const Contact: Component = () => {
	return (
		<div class={styles.container}>
			<h1>Contact</h1>
			<h2>App Support:</h2>
			<p>
				Please contact dev@faisalbin.com for any kind of support, feedback,
				feature requests or criticism :){" "}
			</p>
			<h2>Social links:</h2>
			<p>
				<a href="https://twitter.com/faisalbahmed" target="_blank">
					Twitter
				</a>{" "}
				(Author)
			</p>
			<p>
				<a href="https://linkedin.com/in/faisalbin" target="_blank">
					LinkedIn
				</a>
			</p>
			<p>
				<a href="https://faisalbin.com" target="_blank">
					Personal Portfolio
				</a>
			</p>
			<p>
				<a href="https://github.com/faisalbinahmed" target="_blank">
					Github
				</a>
			</p>

			<h2>Donate:</h2>
			<p>
				<a href="https://www.buymeacoffee.com/faisalbin" target="_blank">
					Buy Me a Coffee
				</a>
			</p>
			<p>
				<a href="https://paypal.me/FaisalDE" target="_blank">
					Paypal
				</a>{" "}
				(Personal)
			</p>
		</div>
	);
};

export default Contact;
