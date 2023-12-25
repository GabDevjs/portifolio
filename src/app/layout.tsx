import "../styles/index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";

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
				<Script>{`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MX64LJX2');`}</Script>
			</head>
			<body
				className={` ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX64LJX2"
					height="0" width="0" style={{
						display: 'none',
						visibility: 'hidden'
					}}></iframe></noscript>
				{children}
			</body>
		</html >
	);
}
