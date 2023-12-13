"use client"
import Astronauta from "/public/astronauta.png";
import React, { useEffect, useState } from "react";
import { Navigation } from "./components/nav";
import { Footer, navigation } from "./components/footer";
import { Card } from "./components/card";
import Image from "next/image";
import { BsArrowDown, BsRocketTakeoffFill, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Particles3d } from "./components/particles3d";
import Particles from "./components/particles";
import { Projects } from "@/data/projects";
import { IProject } from "@/data/projects.d";
import { ProjectCard } from "./components/projectCard";
import { useForm } from "react-hook-form";
import { createErrorToast } from "../util/ToatsNotification";
import { sendMailer } from "../services/sendMailer";
import { useRouter } from "next/router";
import { PatternFormat } from "react-number-format"

const DynamicPlanet = dynamic(() => import("./components/planet").then((mod) => mod.Planet), {
	loading: () => <></>
})

export default function Home() {
	const { register, handleSubmit, setValue, reset } = useForm();
	const [isMobile, setIsMobile] = useState(false);
	const [viewMore, setViewMore] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [phoneValue, setPhoneValue] = useState("");
	const router = useRouter();

	const handleSubmitContact = async (data: any) => {
		setIsLoading(true);
		data = {
			body: {
				name: data.name,
				email: data.email,
				phone: data.phone,
			},
			config: {
				completo: false,
				path: router.asPath,
			},
		};

		const res = await sendMailer(data);


		if (res.status == 422) {
			createErrorToast(`${res.data.menssagem}`);
			return;
		}

		if (res.status == 200) {
			setIsLoading(false);
			reset();
			setPhoneValue("");
			setValue("name", "");
			setValue("email", "");
			setValue("phone", "");
			router.push("/obrigado");
			return;
		}

		if (res.status == 500) {
			reset();
			setPhoneValue("");
			setValue("name", "");
			setValue("email", "");
			setValue("phone", "");
			createErrorToast(
				"Erro ao enviar a mensagem, tente novamente mais tarde!"
			);
			return;
		}

		createErrorToast("Erro ao enviar a mensagem, tente novamente mais tarde!");
		setIsLoading(false);
	};

	useEffect(() => {
		if (window.innerWidth < 1280) {
			setIsMobile(true);
		}
	}, []);

	return (
		<div className="flex flex-col relative top-0 inset-x-0 gap-x-15 items-center justify-center w-full overflow-x-hidden px-2"
		>
			<div className="absolute h-screen inset-0 -z-10 animate-fade-in ">
				{!isMobile ? (
					<>
						<Particles quantity={40} className="w-screen h-screen" />
						<Particles quantity={40} className="w-screen h-screen" />
					</>
				) : (
					<Particles3d />
				)}
			</div>
			<Navigation />
			<section className="flex md:px-4 justify-center items-center h-screen  max-w-7xl relative w-full flex-col z-10">
				<h1 className="z-10 font-bold text-xl text-transparent text-edge-outline animate-fade-in cursor-default font-display md:text-3xl 2xl:text-4xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text">
					Flavio Gabriel,<br className="inline md:hidden" /> Programador Freelancer
				</h1>
				<div className=" w-screen h-px animate-glow block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="z-10 animate-title w-full">
					<h1 className="text-[2.5rem] text-white cursor-default font-bold leading-tight sm:text-6xl xl:text-6xl 2xl:text-8xl 2xl:whitespace-nowrap text-center my-2 xl:my-4">
						Seu Espaço para  Inovação <br className="hidden 2xl:block" /> Digital
					</h1>
				</div>
				<div className="w-screen h-px animate-glow block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="text-center animate-fade-in max-w-4xl">
					<h2 className="text-sm md:text-base  text-gray-300/90 md:mx-6">
						Bem-vindo ao seu universo digital, onde o código se entrelaça com as estrelas e a criatividade se funde com o espaço infinito da inovação. Paixão por programação, pronta para levar seus projetos além das estrelas!
					</h2>
				</div>
				<div className="flex justify-center items-center flex-wrap pt-6	md:mb-10 gap-2 gap-y-5 md:gap-6 w-full text-sm animate-fade-in">
					<Link href="/orcamento"
						className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
					>
						<BsRocketTakeoffFill className="h-5 w-5" />
						Solicite um orçamento
					</Link>

					<span className="text-gray-300/90 text-sm ">
						ou
					</span>
					<Link href="#sobre"
						className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
					>
						<BsWhatsapp className="h-5 w-5" />
						Entre em contato
					</Link>
				</div>
			</section>
			<DynamicPlanet />
			<div className="w-full hidden xl:block h-[70vh] ">
			</div>

			<section id="sobre" aria-label="sobre" className="flex items-center justify-center w-full ">
				<div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-x-10 py-20 w-full max-w-7xl md:px-4">
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
						<h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl xl:text-4xl font-semibold text-ellipsis bg-clip-text mb-2 ">
							Sobre Mim
						</h3>
						<h2 className="text-3xl font-display font-bold cursor-default sm:text-4xl md:text-5xl mb-2 text-gray-200 ">
							Transformando Códigos em Experiências Inovadoras
						</h2>
						<p className="text-sm xl:text-base mt-10 text-gray-300/70 ">
							Há mais de dois anos, iniciei minha jornada na programação e desde então, a paixão por desenvolvimento só cresceu. Sou um profissional dedicado, especializado como desenvolvedor full-stack e webdesign. Com um ano de experiência, já desenvolvi uma variedade de projetos, desde sites institucionais e Landing Pages até sistemas empresariais complexos.
							<br />
							<br />
							Minha missão é otimizar a experiência do usuário em cada aplicativo, sempre buscando a máxima qualidade e inovação. Estou pronto para contribuir, criar e inovar no mundo digital.
						</p>
						<div className="flex items-center flex-wrap w-full gap-6 pt-5 ">
							{navigation.social.map((item, index) => (
								<div key={index}>
									<Link href={item.href}
										className="bg-gray-200/10 p-2.5 hover:scale-125 rounded-full group shadow-xl flex justify-center flex-col border-2 border-gray-500 border-opacity-40 transition-all duration-300 cursor-pointer text-gray-100"
										target="_blank"
									>
										<span className="sr-only">{item.name}</span>
										<item.icon className="h-6 w-6" aria-hidden="true" />
									</Link>
								</div>
							))}
						</div>
					</div>
				</div >
			</section >

			<section aria-label="Serviços" className="flex flex-col items-center w-full justify-center xl:pt-10 mb-20">
				<div className="flex justify-between items-center flex-col w-full max-w-7xl">
					<h2 className="text-5xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-6xl 2xl:whitespace-nowrap xl:text-8xl text-ellipsis bg-clip-text mb-2 font-bold ">
						Serviços
					</h2>
					<div className="w-full flex justify-center flex-wrap items-center gap-x-4 gap-y-6 pt-10 ">
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

			<section id="projetos" aria-label="projetos" className="flex flex-col items-center w-full justify-center xl:mt-20 xl:mb-12">
				<div className="flex justify-between items-center flex-col w-full max-w-6xl">
					<h2 className="text-5xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-6xl 2xl:whitespace-nowrap xl:text-8xl text-ellipsis bg-clip-text mb-2 font-bold ">
						Projetos
					</h2>
					<div className="grid md:grid-cols-2 gap-y-10 gap-x-5 pt-10 pb-6">
						{viewMore ?
							Projects.map((item: IProject, index) => (
								<ProjectCard item={item} key={index} />
							)) :
							Projects.slice(0, 4).map((item: IProject, index) => (
								<ProjectCard item={item} key={index} />
							))
						}
					</div>
					{Projects.length >= 4 && (
						<Card className="flex justify-center items-center  w-full max-w-6xl py-1" onClick={() => {
							setViewMore(!viewMore)
						}} >
							<h2 className="text-xl font-display text-center inline-flex gap-2 items-center text-transparent text-edge-outline cursor-default  2xl:whitespace-nowrap xl:text-2xl text-ellipsis bg-clip-text  font-bold ">
								Ver {viewMore ? "menos" : "mais"}
								<BsArrowDown className={`inline text-white h-5 w-5 ${viewMore && "rotate-180"} transition-transform duration-300`} />
							</h2>
						</Card>
					)}
				</div>
			</section>

			<section id="contato" aria-label="contato" className="flex flex-col items-center justify-center w-full mt-10">
				<Card className="max-w-6xl w-full rounded-3xl ">
					<form onSubmit={handleSubmit(handleSubmitContact)}
						className="grid md:grid-cols-2 gap-y-10 gap-x-5 py-10 px-2 md:px-5">
						<div className="py-2 md:py-3 md:col-span-2 px-4 md:px-[5vw]">
							<h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-gray-100">
								Tem uma ideia incrível? <br /> Vamos dar vida a isso.
							</h2>
						</div>
						<div className="py-3 px-2 col-span-1 group">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 group-focus:translate-x-0 group-focus:translate-y-0">
								Name
							</label>
							<div className="relative mt-2">
								<input
									type="text"
									id="name"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
									{...register("name")}
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
									id="email"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
									{...register("email")}
								/>
								<div
									className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="py-3 px-2 col-span-2">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
								Telefone
							</label>
							<div className="relative mt-2">
								<PatternFormat
									name="phone"
									placeholder="(00) 00000-0000"
									type="tel"
									format="(##) #####-####"
									value={phoneValue || ""}
									required
									className="focus:border-mv-verduncio w-full rounded-3xl border-[1px] px-8 py-2 text-xl text-zinc-800 placeholder:text-zinc-500"
									onValueChange={({ value }: {
										value: string
									}) => {
										setValue("phone", value);
									}}
									onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
										setPhoneValue(e.target.value);
									}}
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
									id="mensagem"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
									{...register("mensagem")}
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
								className="w-32 h-32 relative border border-gray-200 py-2 px-8 text-white inline-flex gap-2 items-center font-bold uppercase rounded-full overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
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
