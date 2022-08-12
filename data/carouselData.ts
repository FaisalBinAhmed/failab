export interface StoreItems {
	storeType: "macOS" | "chrome" | "edge" | "play";
	link: string;
}

export interface Screenshot {
	path: string;
	description: string;
}

export interface CarouselItem {
	id: number;
	title: string;
	heroThumb: string;
	icon: string;
	description: string;
	color: string;
	fontColor?: string;
	storeLinks: StoreItems[];
	tag: string;
	screenshots: Screenshot[];
}

export const appNames: string[] = ["tabius", "trilby", "scaler", "keytrails"];

export const carouselData: CarouselItem[] = [
	{
		id: 0,
		title: "Tabius",
		heroThumb: "/assets/tabius/tabius-hero.png",
		icon: "assets/tabius/tabius-logo.jpeg",
		description: "Tab Grouping Assistant for Chrome and Microsoft Edge",
		color: "#B6D1E4",
		fontColor: "black",
		storeLinks: [
			{
				storeType: "chrome",
				link: "https://chrome.google.com/webstore/detail/tabius-tab-grouping-assis/enceimdjnaccoeikjobaeicfodlfnijp?hl=en",
			},
			{
				storeType: "edge",
				link: "https://microsoftedge.microsoft.com/addons/detail/tabius-tab-grouping-ass/filcmnpmbooeiloehikfjlligcgnnibb",
			},
		],
		tag: "Chrome",
		screenshots: [
			{
				path: "",
				description: "this is a screenshot description",
			},
			{
				path: "",
				description: "this is another screenshot description",
			},
			{
				path: "",
				description: "this is another screenshot description",
			},
			{
				path: "",
				description: "this is another screenshot description",
			},
		],
	},
	{
		id: 1,
		title: "Trilby",
		heroThumb: "assets/trilby/trilby.png",
		icon: "assets/tabius-small.jpeg",
		description: "Best Hacker News App for Android - completely free!",
		color: "#FFF3E9",
		fontColor: "black",
		storeLinks: [
			{
				storeType: "play",
				link: "https://play.google.com/store/apps/details?id=com.failab.trilby",
			},
		],
		tag: "Android",
		screenshots: [
			{
				path: "",
				description: "this is a screenshot description",
			},
			{
				path: "",
				description: "this is another screenshot description",
			},
		],
	},
	{
		id: 2,
		title: "Scaler",
		heroThumb: "assets/scaler/scaler.jpeg",
		icon: "assets/tabius-small.jpeg",
		description: "Realtime bandwidth monitor application for macOS devices.",
		color: "#208DCF",
		storeLinks: [
			{
				storeType: "macOS",
				link: "https://apps.apple.com/app/scaler-bandwidth-monitor/id1612708557?mt=12",
			},
		],
		tag: "Mac",
		screenshots: [
			{
				path: "",
				description: "this is a screenshot description",
			},
			{
				path: "",
				description: "this is another screenshot description",
			},
		],
	},
	{
		id: 3,
		title: "KeyTrails",
		heroThumb: "assets/keytrails/kt5.png",
		icon: "assets/tabius-small.jpeg",
		description:
			"Present your keystrokes on screen with style - for macOS devices",
		color: "#2F4DB2",
		storeLinks: [
			{
				storeType: "macOS",
				link: "",
			},
		],
		tag: "Mac",
		screenshots: [
			{
				path: "",
				description: "this is a screenshot description",
			},
			{
				path: "",
				description: "this is another screenshot description",
			},
		],
	},
];
