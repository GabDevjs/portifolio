import Astronauta from "/public/astronauta.png";
import React from "react";
import Particles from "./components/particles";
import { Planet } from "./components/planet";
import { Navigation } from "./components/nav";
import { Footer } from "./components/footer";
import { Card } from "./components/card";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";


export default function Home() {
	return (
		<div className="flex flex-col relative top-0 inset-x-0 items-center justify-center w-full">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<section className="flex justify-center items-center h-[90vh] max-w-7xl relative w-full flex-col z-10">
				<Navigation />
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>

				<h1 className="z-10 text-3xl text-transparent duration-1000 text-edge-outline animate-fade-in cursor-default font-display sm:text-4xl md:text-6xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-2">
					Flavio Gabriel, Desenvolvedor Freelancer
				</h1>
				<h1 className="z-10 text-4xl text-transparent duration-1000 text-edge-outline bg-white cursor-default  animate-title font-display sm:text-5xl md:text-8xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-6">
					Seu Espaço para Inovação Digital
				</h1>

				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="text-center animate-fade-in max-w-3xl">
					<h2 className="text-base xl:text-lg text-gray-300/90 mx-6">
						Desnvolvedor Full Stack, com foco em desenvolvimento de aplicações web.
					</h2>
				</div>
			</section>
			<Planet />
			<div className="w-full h-[80vh] z-10">
			</div>

			<section aria-label="Serviços" className="flex flex-col items-center justify-center z-0">
				<div className="flex justify-between items-center flex-col w-full max-w-7xl p-4 ">
					<h2 className="text-3xl font-display text-center text-transparent duration-1000 text-edge-outline cursor-default sm:text-4xl md:text-6xl 2xl:whitespace-nowrap text-ellipsis bg-clip-text mb-2 ">
						Serviços
					</h2>
					<div className="w-full flex justify-center flex-wrap items-center gap-x-4 gap-y-6 pt-20 ">
						<Card className="max-w-sm">
							<div className="py-20 px-4 flex flex-col gap-4">
								<h3 className="text-2xl font-display  text-center text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl  bg-clip-text mb-2 bg-gray-100 ">
									Landing Page
								</h3>
								<p className="text-sm text-center xl:text-base text-gray-300/70 ">
									Descubra o poder de uma primeira impressão memorável com nossa Landing Page Espacial. Criada com um design intergaláctico, esta página não apenas cativa os visitantes, mas também os leva a uma jornada estelar através de sua marca. Deixe sua presença online decolar!
								</p>
							</div>
						</Card>
						<Card className="max-w-sm">
							<div className="py-20 px-4 flex flex-col gap-4">
								<h3 className="text-2xl font-display text-center text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl  text-ellipsis bg-clip-text bg-gray-100 mb-2 ">
									Site Institucional
								</h3>
								<p className="text-sm text-center xl:text-base text-gray-300/70 ">
									Transmita a essência da sua empresa com nosso Site Institucional Estelar. Cada página é uma constelação de informações relevantes e visualmente deslumbrantes, criando uma narrativa envolvente para seus clientes. Deixe sua marca brilhar no vasto cosmos da internet.
								</p>
							</div>
						</Card>
						<Card className="max-w-sm">
							<div className="py-16 px-4 flex flex-col gap-4">
								<h3 className="text-2xl font-display text-center text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl  text-ellipsis bg-clip-text bg-gray-100 mb-2 ">
									Outros Serviços
								</h3>
								<p className="text-sm text-center xl:text-base text-gray-300/70 ">
									Além disso, oferecemos uma variedade de outros serviços que se adaptam às suas necessidades, desde desenvolvimento de aplicativos móveis inovadores até soluções de comércio eletrônico que expandem suas fronteiras comerciais. Nosso objetivo é transformar suas visões em realidade digital, não importa quão ambiciosas sejam.
								</p>
							</div>
						</Card>
					</div>
				</div>
			</section>

			<section aria-label="sobre" className="flex flex-col items-center justify-center w-full h-screen z-0">
				<div className="flex justify-between items-center flex-col xl:flex-row py-10 gap-x-10 2xl:py-20 w-full max-w-7xl p-4 ">
					<div className="flex justify-center items-center py-10 ">
						<Image
							src={Astronauta}
							alt="Astronauta"
							className="object-cover animate-fade-in drop-shadow-2xl"
							width={600}
							height={600}
						/>
					</div>
					<div className="flex justify-center flex-col flex-1 py-10 ">
						<h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl  text-ellipsis bg-clip-text mb-2 ">
							Sobre Mim
						</h3>
						<h2 className="text-3xl font-display text-transparent duration-1000 text-edge-outline cursor-default sm:text-4xl md:text-5xl text-ellipsis bg-clip-text mb-2 bg-gray-200 ">
							Transformando Códigos em Experiências Inovadoras
						</h2>
						<p className="text-sm xl:text-base mt-10 text-gray-300/70 ">
							Há mais de dois anos, iniciei minha jornada na programação e desde então, a paixão por desenvolvimento só cresceu. Sou um profissional dedicado, especializado como desenvolvedor full-stack e webdesign. Com um ano de experiência, já desenvolvi uma variedade de projetos, desde sites institucionais e Landing Pages até sistemas empresariais complexos.
							<br />
							<br />
							Minha missão é otimizar a experiência do usuário em cada aplicativo, sempre buscando a máxima qualidade e inovação. Estou pronto para contribuir, criar e inovar no mundo digital.
						</p>
						<div className="pt-8 pb-3 inline-table gap-4">
							<Link href="/sobre" className="text-gray-200/80 text-lg hover:text-gray-100 group px-4 py-2 rounded-full transition-all duration-200">
								Saiba Mais <BsArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-200" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section aria-label="contato" className="flex flex-col items-center justify-center w-full h-screen z-0">
				<div className="flex justify-between items-center flex-col xl:flex-row py-10 gap-x-10 2xl:py-20 w-full max-w-7xl p-4 ">
					<div className="flex justify-center items-center py-10 ">
						<Image
							src={Astronauta}
							alt="Astronauta"
							className="object-cover animate-fade-in drop-shadow-2xl"
							width={600}
							height={600}
						/>
					</div>
					<div className="flex justify-center flex-col flex-1 py-10 ">
						<h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl  text-ellipsis bg-clip-text mb-2 ">
							Sobre Mim
						</h3>
						<h2 className="text-3xl font-display text-transparent duration-1000 text-edge-outline cursor-default sm:text-4xl md:text-5xl text-ellipsis bg-clip-text mb-2 bg-gray-200 ">
							Transformando Códigos em Experiências Inovadoras
						</h2>
						<p className="text-sm xl:text-base mt-10 text-gray-300/70 ">
							Há mais de dois anos, iniciei minha jornada na programação e desde então, a paixão por desenvolvimento só cresceu. Sou um profissional dedicado, especializado como desenvolvedor full-stack e webdesign. Com um ano de experiência, já desenvolvi uma variedade de projetos, desde sites institucionais e Landing Pages até sistemas empresariais complexos.
							<br />
							<br />
							Minha missão é otimizar a experiência do usuário em cada aplicativo, sempre buscando a máxima qualidade e inovação. Estou pronto para contribuir, criar e inovar no mundo digital.
						</p>
						<div className="py-3 inline-table gap-4">

						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
