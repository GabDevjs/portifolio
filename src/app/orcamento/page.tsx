import { Metadata } from "next";
import { OrcamentoPageTemplate } from "./orcamentosPageTemplate";

export const metadata: Metadata = {
	metadataBase: new URL("https://flaviogabrielportfolio.com.br"),
	title: {
		default: "Orçamento | Flavio Gabriel ~ Desenvolvedor Freelancer",
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
}

export default function Orcamento() {
	return <OrcamentoPageTemplate />
}