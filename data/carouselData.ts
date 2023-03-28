export interface StoreItems {
	storeType: "macOS" | "chrome" | "edge" | "play";
	link: string;
}

export interface Screenshot {
	path: string;
	description: string;
}
interface PrivacyData {
	lastDate: string;
	data: string;
}
export interface Feature {
	title: string;
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
	featurelist?: Feature[];
	privacyInfo?: PrivacyData;
}

export const appNames: string[] = [
	"tabius",
	"trilby",
	"scaler",
	"keytrails",
	"cliptonite",
];

export const carouselData: CarouselItem[] = [
	{
		id: 0,
		title: "Tabius",
		heroThumb: "/assets/tabius/tabius.jpeg",
		icon: "/assets/tabius/tabius-logo.jpeg",
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
				path: "/assets/tabius/tb2.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/tabius/tb3.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/tabius/tb4.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/tabius/tb5.png",
				description: "this is a screenshot description",
			},
		],
	},
	{
		id: 1,
		title: "Trilby",
		heroThumb: "/assets/trilby/trilby.png",
		icon: "/assets/trilby/trilby-logo.webp",
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
				path: "/assets/trilby/ts1.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/trilby/ts2.webp",
				description: "this is another screenshot description",
			},
			{
				path: "/assets/trilby/ts3.webp",
				description: "this is another screenshot description",
			},
			{
				path: "/assets/trilby/ts4.webp",
				description: "this is another screenshot description",
			},
		],
		featurelist: [
			{
				title: "See What's Happening in Hacker News",
				description: "Read the top and latest posts from HN, and many more.",
			},
			{
				title: "Dark Mode",
				description:
					"Dark mode for your night time viewing. Can automatically sync with your system.",
			},
			{
				title: "Beautifully Crafted Skins",
				description:
					"Six meticulously picked color skins. Pick whichever you like and sync with Light/Dark Mode.",
			},
			{
				title: "Powerful Search Features",
				description:
					"Search HN posts powered by Algolia - just like the HN web. Sort by date, and filter by post type.",
			},
			{
				title: "Highly Customizable",
				description: "Make the app look like the way you want.",
			},
			{
				title: "Read History",
				description: "Keep track of your last read articles.",
			},
			{
				title: "Profile View",
				description:
					"View yours and others' profile and their latest activities.",
			},
			{
				title: "Read Comments in Great Details",
				description:
					"Trilby was created with reading comments in mind. If you're like me who uses HN mainly to read comments, Trilby is the app for you.",
			},
			{
				title: "Login Functions",
				description:
					"Use features like commenting, upvoting, and posting new stories that require you to login right from the app.",
			},
			{
				title: "Native Links Support",
				description:
					"Open and read native HN links within the app itself. Look out for that Orange link.",
			},
		],
	},
	{
		id: 2,
		title: "Scaler",
		heroThumb: "/assets/scaler/scaler.jpeg",
		icon: "/assets/scaler/scaler-logo.webp",
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
				path: "/assets/scaler/sc1.jpeg",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/scaler/sc2.jpeg",
				description: "this is another screenshot description",
			},
		],
		featurelist: [
			{
				title: "Speed Meter",
				description:
					"Realtime monitoring of your system's download and upload speed from Menubar.",
			},
			{
				title: "Chart View",
				description: "Chart overview of the recent network speeds.",
			},
			{
				title: "Native",
				description:
					"Universal App support. (works with Native M1 macOS devices)",
			},
			{
				title: "Customizations",
				description:
					"tweak how the Menubar data looks by modifying visible speed type, its unit, number of lines, and color.",
			},
			{
				title: "Control",
				description: "Pause or Resume the app anytime.",
			},
		],
		privacyInfo: {
			lastDate: "14 Feb 2022",
			data: `Scaler does not collect any user information. User preference for the app is stored within the device itself and does not leave the device.

Please note: Scaler does not need and should not ask for any permissions.`,
		},
	},
	{
		id: 3,
		title: "KeyTrails",
		heroThumb: "/assets/keytrails/kt5.png",
		icon: "/assets/keytrails/keytrails-logo.png",
		description:
			"Present your keystrokes on screen with style - for macOS devices",
		color: "#2F4DB2",
		storeLinks: [
			{
				storeType: "macOS",
				link: "https://apps.apple.com/us/app/keytrails/id1632266803",
			},
		],
		tag: "Mac",
		screenshots: [
			{
				path: "/assets/keytrails/kt1.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/keytrails/kt2.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/keytrails/kt3.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/keytrails/kt4.png",
				description: "this is a screenshot description",
			},
			{
				path: "/assets/keytrails/kt6.png",
				description: "this is a screenshot description",
			},
		],
		featurelist: [
			{
				title: "Visualize",
				description: "Visualize your keypresses in style.",
			},
			{
				title: "Customize",
				description: "Personalize the look of the keys.",
			},
			{
				title: "Native",
				description:
					"Universal App support. (works with Native M1 macOS devices)",
			},
			{
				title: "Similarity",
				description: "Keys look and feel just like your physical device.",
			},
			{
				title: "Control",
				description: "Limit number of keys and their lifetime on screen.",
			},
			{
				title: "Clicks",
				description: "Optionally visualize mouse clicks as well.",
			},
			{
				title: "Placement",
				description: "Position it anywhere on screen, on any screen.",
			},
		],
		privacyInfo: {
			lastDate: "July 5 2022",
			data: `KeyTrails does not collect any user information. User preference for the app is stored within the device itself and does not leave the device.

Please note: KeyTrails needs Input Monitoring permission to get your keyboard and mouse inputs from the system. Without this permission, KeyTrails can’t perform. KeyTrails never uses this data for any purposes. This data is never recorded nor it ever leaves your device. You can even block KeyTrails’ internet access for added peace of mind. Sensitive information such as passwords will never be shown by the app. In fact, macOS blocks any app to intervene such data.`,
		},
	},
	{
		id: 4,
		title: "Cliptonite",
		heroThumb: "/assets/cliptonite/logo.png",
		icon: "/assets/cliptonite/logo.png",
		description: "Beautiful and Fast Clipboard App",
		color: "#2F4DB2",
		storeLinks: [
			{
				storeType: "macOS",
				link: "https://apps.apple.com/us/app/keytrails/id1632266803",
			},
		],
		tag: "Mac",
		screenshots: [],
		featurelist: [],
		privacyInfo: {
			lastDate: "March 28 2023",
			data: `Cliptonite does not collect any user information.
Please note: Cliptonite does not need and should not ask for any permissions.`,
		},
	},
];
