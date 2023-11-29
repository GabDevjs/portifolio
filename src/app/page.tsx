"use client"
import Astronauta from "/public/astronauta.png";
import React from "react";
import { Navigation } from "./components/nav";
import { Footer } from "./components/footer";
import { Card } from "./components/card";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Particles3d } from "./components/particles3d";

const DynamicPlanet = dynamic(() => import("./components/planet").then((mod) => mod.Planet), {
	loading: () => <></>
})

export default function Home() {
	return (
		<div className="flex flex-col relative top-0 inset-x-0 gap-x-15 items-center justify-center w-full"
		>
			<div className="fixed inset-0 -z-10 animate-fade-in opacity-50">
				<Particles3d
				/>
			</div>
			<Navigation />
			<section className="flex px-3 justify-center items-center h-[90vh] max-w-7xl relative w-full flex-col z-10">
				<div className=" w-screen h-px animate-glow block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<h1 className="z-10 text-3xl text-transparent text-edge-outline animate-fade-in cursor-default font-display sm:text-4xl 2xl:text-6xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-2">
					Flavio Gabriel, Desenvolvedor Freelancer
				</h1>
				<div className="z-10 animate-title">
					<h1 className="text-5xl text-white cursor-default font-bold leading-tight sm:text-6xl 2xl:text-8xl 2xl:whitespace-nowrap text-center mb-6">
						Seu Espaço para  Inovação <br /> Digital
					</h1>
				</div>
				<div className="w-screen h-px animate-glow block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="text-center animate-fade-in max-w-3xl">
					<h2 className="text-base xl:text-lg text-gray-300/90 mx-6">
						Desnvolvedor Full Stack, com foco em desenvolvimento de aplicações web.
					</h2>
				</div>
			</section>
			<DynamicPlanet />
			<div className="w-full hidden xl:block h-[50vh]  md:h-[90vh] ">
			</div>

			<section aria-label="Serviços" className="flex flex-col items-center w-full justify-center ">
				<div className="flex justify-between items-center flex-col w-full max-w-7xl p-4 ">
					<h2 className="text-3xl font-display text-center text-transparent duration-1000 text-edge-outline cursor-default sm:text-4xl md:text-6xl 2xl:whitespace-nowrap text-ellipsis bg-clip-text mb-2 ">
						Serviços
					</h2>
					<div className="w-full flex justify-center flex-wrap items-center gap-x-4 gap-y-6 pt-20 ">
						<Card className="sm:max-w-sm">
							<div className="py-20 px-4 flex flex-col gap-4">
								<h3 className="text-2xl font-display text-center cursor-default sm:text-3xl mb-2 text-gray-100 ">
									Landing Page
								</h3>
								<p className="text-sm text-center xl:text-base text-gray-300/70 ">
									Descubra o poder de uma primeira impressão memorável com nossa Landing Page Espacial. Criada com um design intergaláctico, esta página não apenas cativa os visitantes, mas também os leva a uma jornada estelar através de sua marca. Deixe sua presença online decolar!
								</p>
							</div>
						</Card>
						<Card className="sm:max-w-sm">
							<div className="py-20 px-4 flex flex-col gap-4">
								<h3 className="text-2xl font-display text-center cursor-default sm:text-3xl mb-2 text-gray-100 ">
									Site Institucional
								</h3>
								<p className="text-sm text-center xl:text-base text-gray-300/70 ">
									Transmita a essência da sua empresa com nosso Site Institucional Estelar. Cada página é uma constelação de informações relevantes e visualmente deslumbrantes, criando uma narrativa envolvente para seus clientes. Deixe sua marca brilhar no vasto cosmos da internet.
								</p>
							</div>
						</Card>
						<Card className="sm:max-w-sm">
							<div className="py-16 px-4 flex flex-col gap-4">
								<h3 className="text-2xl font-display text-center cursor-default sm:text-3xl mb-2 text-gray-100 ">
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

			<section aria-label="sobre" className="flex items-center justify-center w-full">
				<div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-x-10 py-20 w-full max-w-7xl p-4 ">
					<div className="flex justify-center flex-1 items-center py-10 ">
						<Image
							src={Astronauta}
							alt="Astronauta"
							className="object-cover animate-fade-in drop-shadow-2xl"
							width={600}
							height={600}
						/>
					</div>
					<div className="flex justify-center flex-col flex-1 py-10 max-w-4xl ">
						<h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl  text-ellipsis bg-clip-text mb-2 ">
							Sobre Mim
						</h3>
						<h2 className="text-3xl font-display cursor-default sm:text-4xl md:text-5xl mb-2 text-gray-200 ">
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

			<section aria-label="projetos" className="flex items-center justify-center w-full">
				<div className="flex justify-between items-center flex-col w-full max-w-7xl p-4 ">
					<h2 className="text-3xl font-display text-center text-transparent duration-1000 text-edge-outline cursor-default sm:text-4xl md:text-6xl 2xl:whitespace-nowrap text-ellipsis bg-clip-text mb-2 ">
						Serviços
					</h2>
					<div className="grid md:grid-cols-2 gap-y-10 gap-x-5 py-10 px-5 max-w-7xl">

					</div>
				</div>
			</section>

			<section aria-label="contato" className="flex flex-col items-center justify-center w-full px-4">
				<Card className="max-w-7xl w-full rounded-3xl">
					<form className="grid md:grid-cols-2 gap-y-10 gap-x-5 py-10 px-5">
						<div className="py-3 md:col-span-2 px-4 md:px-[5vw]">
							<h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-edge-outline text-ellipsis bg-clip-text">
								Precisando de ajudar? <br /> entre em contato
							</h2>
						</div>
						<div className="py-3 px-2 col-span-1">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
								Name
							</label>
							<div className="relative mt-2">
								<input
									type="text"
									name="name"
									id="name"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
								/>
								<div
									className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="py-3 px-2 col-span-1">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
								E-mail
							</label>
							<div className="relative mt-2">
								<input
									type="email"
									name="email"
									id="email"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
								/>
								<div
									className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="py-3 px-2 col-span-1 pt-10 md:col-span-2">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
								Mensagem
							</label>
							<div className="relative mt-2">
								<textarea
									name="mensagem"
									id="mensagem"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
								/>
								<div
									className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="py-3  md:col-span-2 flex justify-end px-4 md:px-[10vw]">
							<button
								type="submit"
								className="w-32 h-32 inline-flex gap-2 text-xl font-medium justify-center items-center border border-gray-200 rounded-full text-gray-200 focus:outline-none hover:bg-gray-200 hover:text-gray-900 transition-colors duration-500 ease-in-out uppercase">
								Enviar
							</button>
						</div>
					</form>
				</Card>
			</section >
			<Footer />
		</div >
	);
}
