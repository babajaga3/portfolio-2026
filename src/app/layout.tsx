import "@/styles/globals.css";

import type { Metadata } from "next";
import { EB_Garamond, Geist, Press_Start_2P } from "next/font/google";
import localFont from 'next/font/local'

export const metadata: Metadata = {
	title: "Toma Bourov",
	description: "Pushing code since '05",
	icons: [{ rel: "icon", url: "https://cdn.tomabourov.com/portfolio/002.jpg" }], //todo, return to this
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});
const ebGaramond = EB_Garamond({
	subsets: ["latin", "cyrillic"],
	variable: "--font-eb-garamond",
});
const pressStart = Press_Start_2P({
	weight: "400",
	subsets: ["latin", "cyrillic"],
	variable: "--font-press-start",
});

const windows95 = localFont({
		src: [
			{
				path: "../../public/fonts/w95.otf",
				weight: "400",
				style: "normal",
			},
			{
				path: "../../public/fonts/w95-bold.otf",
				weight: "700",
				style: "normal",
			},
		],
		variable: "--font-windows-95",
	});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${geist.variable} ${ebGaramond.variable} ${pressStart.variable} ${windows95.variable}`}
			lang="en"
		>
			<body>{children}</body>
		</html>
	);
}
