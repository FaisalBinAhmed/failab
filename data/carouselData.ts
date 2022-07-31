export interface StoreItems {
	storeType: "macOS" | "chrome" | "edge" | "play";
	link: string;
}

export interface CarouselItem {
	id: number;
	title: string;
	heroThumb: string;
	icon: string;
	description: string;
	color: string;
	fontColor?: string;
	storeLinks: StoreItems[] | StoreItems;
	tag: string;
}

export const carouselData: CarouselItem[] = [
	{
		id: 0,
		title: "Tabius",
		heroThumb: "assets/tabius.jpeg",
		icon: "assets/tabius-small.jpeg",
		description: "Tab Grouping Assistant for Chrome and Microsoft Edge",
		color: "#B6D1E4",
		fontColor: "black",
		storeLinks: [
			{
				storeType: "chrome",
				link: "",
			},
			{
				storeType: "edge",
				link: "",
			},
		],
		tag: "Chrome",
	},
	{
		id: 1,
		title: "Trilby",
		heroThumb: "assets/tabius.jpeg",
		icon: "assets/tabius-small.jpeg",
		description: "Best Hacker News App for Android - completely free!",
		color: "#FFF3E9",
		fontColor: "black",
		storeLinks: [
			{
				storeType: "chrome",
				link: "",
			},
			{
				storeType: "edge",
				link: "",
			},
		],
		tag: "Android",
	},
	{
		id: 2,
		title: "Scaler",
		heroThumb: "assets/tabius.jpeg",
		icon: "assets/tabius-small.jpeg",
		description: "Realtime bandwidth monitor application for macOS devices.",
		color: "#208DCF",
		storeLinks: [
			{
				storeType: "macOS",
				link: "",
			},
		],
		tag: "Mac",
	},
	{
		id: 3,
		title: "KeyTrails",
		heroThumb: "assets/tabius.jpeg",
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
	},
];
