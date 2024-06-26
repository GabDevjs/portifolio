"use client"
import Astronauta from "/public/menino_lindo.jpg";
import React, { useEffect, useState } from "react";
import { Navigation } from "./components/nav";
import { Footer, navigation } from "./components/footer";
import { Card } from "./components/card";
import Image from "next/image";
import { BsArrowDown, BsGithub, BsLinkedin, BsRocketTakeoffFill, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Particles3d } from "./components/particles3d";
import Particles from "./components/particles";
import { Projects } from "@/data/projects";
import { useForm } from "react-hook-form";
import { createErrorToast } from "../util/ToatsNotification";
import axios from "axios";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { Services } from "@/data/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaPaperPlane } from "react-icons/fa6";

const DynamicPlanet = dynamic(() => import("./components/planet").then((mod) => mod.Planet), {
	loading: () => <></>
})

export default function Home() {
	const { register, handleSubmit, setValue, reset } = useForm();
	const [isMobile, setIsMobile] = useState(false);


	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleClearValues = () => {
		reset();
		setValue("name", "");
		setValue("email", "");
	}

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ')
	}

	const handleSubmitContact = async (data: any) => {
		setIsLoading(true);
		data = {
			body: {
				name: data.name,
				email: data.email,
			}
		};

		await axios.post("/api/email", data).then(() => {
			handleClearValues();
			router.push("/obrigado");
		}).catch((err) => {
			console.log(err);
			createErrorToast("Erro ao enviar a mensagem, tente novamente mais tarde!");
		}).finally(() => {
			setIsLoading(false);
		})
	};

	useEffect(() => {
		if (window.innerWidth < 1280) {
			setIsMobile(true);
		}
	}, []);
	return (
		<div className="flex flex-col relative top-0 inset-x-0 gap-x-15 items-center justify-center w-full overflow-x-hidden px-2"
		>
			<div className="absolute h-[200vh] inset-0 -z-10 animate-fade-in ">
				{!isMobile ? (
					<>
						<Particles quantity={80} className="w-screen h-screen" />
					</>
				) : (
					<Particles3d />
				)}
			</div>
			<Navigation home />
			<section className="flex md:px-4 justify-center items-center h-screen  max-w-7xl relative w-full flex-col z-10">
				<h1 className="z-10 font-bold text-xl text-transparent text-edge-outline animate-fade-in cursor-default font-display md:text-3xl 2xl:text-4xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text">
					Flavio Gabriel,<br className="inline md:hidden" /> Programador Freelancer
				</h1>
				<div className=" w-screen h-px animate-glow block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="z-10 animate-title w-full">
					<h1 className="text-[2.1rem] text-white cursor-default font-bold lg:leading-10 sm:text-6xl xl:text-7xl 2xl:text-8xl 2xl:whitespace-nowrap text-center my-2 xl:my-4">
						Seu Espaço para  Inovação <br className="hidden 2xl:block" /> Digital
					</h1>
				</div>
				<div className="w-screen h-px animate-glow block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="text-center animate-fade-in max-w-4xl mt-2">
					<h2 className="text-sm md:text-base  text-gray-300/90 md:mx-6">
						Bem-vindo ao seu universo digital, onde o código se entrelaça com as estrelas e a criatividade se funde com o espaço infinito da inovação. Paixão por programação, pronta para levar seus projetos além das estrelas!
					</h2>
				</div>
				<div className="flex justify-center items-center flex-wrap pt-6	xl:mb-10 gap-2 gap-y-5 md:gap-6 w-full text-sm animate-fade-in">
					<Link href="/orcamento"
						className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
					>
						<BsRocketTakeoffFill className="h-5 w-5" />
						Solicite um orçamento
					</Link>

					<span className="text-gray-300/90 text-sm ">
						ou
					</span>
					<Link
						href="https://api.whatsapp.com/send?phone=5511981154749&text=Ol%C3%A1!%20%F0%9F%91%8B%20Estou%20interessado(a)%20nos%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20projetos%20que%20voc%C3%AA%20realiza?%20Obrigado!"
						target="_blank"
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
					<div className="flex w-full justify-center flex-1 items-center py-10 ">
						<div className=" h-[40vh] md:h-[26rem] xl:h-[33rem] w-full rounded-xl border-8 border-transparent ring-1 ring-gray-500/50 overflow-hidden relative ">
							<Image
								src={Astronauta}
								alt="Astronauta"
								className="object-cover drop-shadow-2xl rounded-lg"
								fill
							/>
						</div>
					</div>
					<div className="flex justify-center flex-col flex-1 py-10 max-w-4xl ">
						<h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl xl:text-4xl font-semibold text-ellipsis bg-clip-text mb-2 ">
							Sobre Mim
						</h3>
						<h2 className="text-3xl font-display font-bold cursor-default sm:text-4xl md:text-5xl mb-2 text-gray-200 ">
							Transformando Códigos em Experiências Inovadoras
						</h2>
						<p className="text-sm xl:text-base  text-gray-300/70 ">
							Há mais de dois anos, iniciei minha jornada na programação e desde então, a paixão por desenvolvimento só cresceu. Sou um profissional dedicado, especializado como desenvolvedor full-stack e webdesign. Com um ano de experiência, já desenvolvi uma variedade de projetos, desde sites institucionais e Landing Pages até sistemas empresariais complexos.
							<br />
							<br />
							Minha missão é otimizar a experiência do usuário em cada aplicativo, sempre buscando a máxima qualidade e inovação. Estou pronto para contribuir, criar e inovar no mundo digital.
						</p>

						<div className="flex lg:items-center flex-col lg:flex-row w-full gap-6 pt-5 md:pt-10 lg:pt-16 ">
							<div className="flex gap-6">
								<Link href="/sobre"
									className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
								>
									Saiba mais
								</Link>
								<span className="text-gray-100/60">
									•
								</span>
							</div>
							<div className="flex flex-wrap gap-6">
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
					</div>
				</div >
			</section >

			<section id="projetos" aria-label="projetos" className="flex flex-col items-center w-full justify-center pb-10 xl:py-20">
				<div className="flex justify-between items-center flex-col w-full max-w-7xl">
					<h2 className="text-5xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-6xl 2xl:whitespace-nowrap xl:text-8xl text-ellipsis bg-clip-text mb-2 font-bold ">
						Portfólio
					</h2>
					<div className="my-5 md:my-16 xl:my-28 space-y-20 md:space-y-28 lg:space-y-32 xl:space-y-[30vh] w-full">
						{Projects.slice(0, 3).map((feature, featureIdx) => (
							<div
								key={feature.title}
								className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 group duration-700 border lg:border-none rounded-xl bg-zinc-800/40 lg:bg-transparent  hover:bg-zinc-800/10 group md:gap-8  hover:border-zinc-700/50 border-zinc-600 p-2 pb-6 gap-4"
							>
								<div
									className={classNames(
										featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
										'mt-6 lg:col-span-6 lg:row-start-1 lg:mt-0 xl:col-span-4'
									)}
								>
									<h3 className="text-xl xl:text-3xl font-semibold text-gray-100">{feature.title}</h3>
									<div className="flex items-center my-3 mb-4 gap-2 flex-wrap lg:flex-row">
										<span className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
											{feature.year.toString()}
										</span>
										<span className="text-gray-100/60">
											•
										</span>
										{feature.tags.length > 0 && feature.tags.map((tag, index) => (
											<span key={index} className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
												{tag}
											</span>
										))}
									</div>
									<p className="mt-2 text-sm lg:text-base text-gray-300">{feature.description}</p>
									<div className="flex mt-10 items-center flex-wrap gap-3 px-1 text-sm">
										<Link href={feature.link}
											className="relative py-1.5 px-6 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 whitespace-nowrap "
											target="_blank"
										>
											<FaPaperPlane className="h-4 w-4" aria-hidden="true" />
											<span>Ir para o site</span>
										</Link>
										{
											feature.otherLinks && feature.otherLinks.length > 0 && feature.otherLinks.map((link, index) => (
												<Link key={index} href={link.link}
													className="relative w-10 h-10 text-black inline-flex gap-2 items-center justify-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 whitespace-nowrap "
													target="_blank"
												>
													{
														link.name === "Github" ? (
															<BsGithub className="h-5 w-5" aria-hidden="true" />
														) : link.name === "Linkedin" ? (
															<BsLinkedin className="h-5 w-5" aria-hidden="true" />
														) : (
															<FaPaperPlane className="h-5 w-5" aria-hidden="true" />
														)
													}
												</Link>
											))
										}
									</div>
								</div>
								<div
									className={classNames(
										featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
										'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
									)}
								>
									<Link href={feature.link} target="_blank">
										<div
											className={classNames(
												`aspect-h-1 aspect-w-5 rounded-lg bg-gray-100 relative `,
											)}>
											<div className="overflow-hidden aspect-h-1 aspect-w-5 rounded-lg ">
												<Image src={feature.mainImage} alt={feature.title} className="object-cover object-center group-hover:scale-110 transition-transform duration-700" />
											</div>

											<Image quality={20} src={feature.mainImage} alt={feature.title} className="object-cover absolute -z-10 inset-0 blur-3xl opacity-40 rounded-3xl object-center group-hover:scale-105 transition-transform duration-700" />
										</div>
									</Link>
								</div>
							</div>
						))}
					</div>
					<Link href="/projetos"
						className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
					>
						Ver mais projetos <BsArrowDown className="h-5 w-5 -rotate-90" />
					</Link>
				</div>
			</section>

			<section aria-label="Serviços" className="flex flex-col items-center w-full justify-center xl:pt-20 pb-20">
				<div className="flex justify-between items-center flex-col w-full max-w-7xl">
					<h2 className="text-5xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-6xl 2xl:whitespace-nowrap xl:text-8xl text-ellipsis bg-clip-text mb-2 font-bold  ">
						Serviços
					</h2>
					<div className="w-full grid  xl:grid-cols-3 gap-x-6 gap-y-16 pt-5 xl:pt-10">
						{!isMobile ? (
							Services.map((item, index) => (
								<Card className="" key={index}>
									<div className="py-20 px-4 flex flex-col gap-4">
										<h3 className="text-xl font-display text-center cursor-default lg:text-2xl mb-2 text-gray-100 ">
											{item.title}
										</h3>
										<p className="text-sm text-center xl:text-base text-gray-300/70 ">
											{item.description}
										</p>
									</div>
								</Card>
							))) : (
							<Swiper
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 30
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 30
									},
									1024: {
										slidesPerView: 3,
										spaceBetween: 30
									}
								}}
								pagination={{
									clickable: true
								}}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false
								}}
								modules={[Pagination, Autoplay]}
								className="mySwiper flex justify-center items-center h-full"
							>
								{Services.map((item, index) => (
									<SwiperSlide key={index} className="w-full flex justify-center items-center">
										<Card className="w-full  h-[50vh]">
											<div className="py-20 px-4 flex flex-col h-full justify-center gap-4">
												<h3 className="text-xl font-display text-center cursor-default lg:text-2xl mb-2 text-gray-100 ">
													{item.title}
												</h3>
												<p className="text-sm text-center xl:text-base text-gray-300/70 ">
													{item.description}
												</p>
											</div>
										</Card>
									</SwiperSlide>
								))}
							</Swiper>
						)}
					</div>
				</div>
			</section>

			<section id="CTA-orcamentos" aria-label="sobre" className="flex items-center justify-center w-full ">
				<div className="flex justify-center items-center w-full max-w-7xl py-5 md:py-8 xl:py-10">
					<Card className="w-full rounded-3xl relative">
						<svg
							className="absolute inset-0  -z-10 h-full w-full stroke-gray-200/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
									width={180}
									height={180}
									x="50%"
									y={-1}
									patternUnits="userSpaceOnUse"
								>
									<path d="M.5 200V.5H200" fill="none" />
								</pattern>
							</defs>

							<rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
						</svg>
						<div className="py-20 md:py-28 xl:py-36 px-2 md:px-5 flex flex-col gap-10 w-full">
							<h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-gray-100 text-center">
								Vamos criar algo incrível juntos?
							</h2>
							<div className="flex justify-center items-center flex-col gap-4 pt-5">
								<Link href="/contato">
									<button
										type="button"
										className="relative  py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
									>
										<span>Começar agora!</span>
									</button>
								</Link>
							</div>
						</div>
					</Card>
				</div>
			</section >

			<section id="contato" aria-label="contato" className="flex max-w-7xl flex-col items-center justify-center w-full mt-10">
				<Card className=" w-full rounded-3xl ">
					<form id="form" onSubmit={handleSubmit(handleSubmitContact)}
						className="grid grid-cols-2 gap-y-10 gap-x-5 py-10 px-2 md:px-5">
						<div className="py-2 md:py-3 col-span-2 px-4 ">
							<h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-gray-100">
								Tem uma ideia incrível? <br /> Vamos dar vida a isso.
							</h2>
						</div>
						<div className="py-3 px-2 col-span-2 md:col-span-1 group">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 group-focus:translate-x-0 group-focus:translate-y-0">
								Nome
							</label>
							<div className="relative mt-2">
								<input
									type="text"
									id="name"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
									alt="Input de nome"
									{...register("name")}
								/>
								<div
									className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="py-3 px-2 col-span-2 md:col-span-1">
							<label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
								E-mail
							</label>
							<div className="relative mt-2">
								<input
									type="email"
									id="email"
									className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
									placeholder=""
									alt="Input de email"
									{...register("email")}
								/>
								<div
									className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="py-3  col-span-2 flex justify-start px-4 ">
							<button
								type="submit"
								className="w-32 h-32 relative border border-gray-200 py-2 px-8 text-white inline-flex gap-2 items-center font-bold uppercase rounded-full overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0  justify-center"
							>
								{isLoading ?
									<span>
										<ClipLoader color="#ffffff" loading={isLoading} size={30} />
									</span>
									:
									<span>Enviar</span>}
							</button>
						</div>
					</form>
				</Card>
			</section >
			<Footer />
		</div>
	);
}
