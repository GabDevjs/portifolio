import "../../styles/index.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Flavio Gabriel | Entre em contato",
		template: "%s | Flavio Gabriel ~ Desenvolvedor Freelancer",
	},
	description: "Explore meu universo digital, onde cada linha de código conta uma história e cada projeto é uma jornada única. Como um programador freelancer apaixonado pelo espaço, transformo ideias em realidade digital, criando websites e aplicativos que transcendem os limites do ordinário.",

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/logo.png",
	},
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")} suppressHydrationWarning={true}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black bg-gradient-to-tl from-black via-zinc-600/20 overflow-x-hidden bg-fixed to-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				{children}
			</body>
		</html>
	);
}
