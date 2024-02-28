import "../styles/index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Suspense } from "react";
import GtmAnalytics from "./components/analytics";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	metadataBase: new URL("https://flaviogabrielportfolio.com.br"),
	title: {
		default: "Flavio Gabriel | Desenvolvedor Freelancer",
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
	themeColor: "#0a0a0a",
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://flaviogabrielportfolio.com.br",
		title: "Flavio Gabriel | Desenvolvedor Freelancer",
		description: "Explore meu universo digital, onde cada linha de código conta uma história e cada projeto é uma jornada única. Como um programador freelancer apaixonado pelo espaço, transformo ideias em realidade digital, criando websites e aplicativos que transcendem os limites do ordinário.",
		images: [
			{
				url: "/og.png",
				width: 400,
				height: 300,
				alt: "Flavio Gabriel | Desenvolvedor Freelancer",
			},
		],
		emails: ["flaviogabrielsr0507@gmail.com"]
	}
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" className={[inter.variable].join(" ")} suppressHydrationWarning={true}>
			<head>
				<Suspense>
					<GtmAnalytics />
				</Suspense>
			</head>
			<body
				className={` ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>

				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html >
	);
}
