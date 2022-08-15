import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 3000,
	},
	// base: "/failab/", //temp as repo
	build: {
		target: "esnext",
		outDir: "docs",
	},
});
