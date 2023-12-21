

"use client";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import { Particles3d } from "../components/particles3d";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";

export default function Obrigado() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 1280) {
			setIsMobile(true);
		}
	}, []);

	return (
		<>
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
				<section className="flex md:px-4 justify-center items-center  max-w-6xl relative w-full flex-col z-10 pt-[20vh]">
					<div className="pb-10 w-full">
						<h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl xl:text-4xl font-semibold text-ellipsis bg-clip-text mb-2 ">
							Orçamento
						</h3>
						<h2 className="text-3xl font-display font-bold cursor-default sm:text-4xl md:text-5xl mb-2 text-gray-200 ">
							Fazer o seu site nunca foi tão fácil!
						</h2>
						<p className="text-base xl:text-lg mt-5 text-gray-300/70 max-w-4xl">
							O briefing é um conjunto de informações para auxiliar em nossos projetos, com esta coleta de dados podemos mapear melhor suas expectativas.
							<br />
							<br />
							É uma peça fundamental para a elaboração de uma proposta comercial, e o planejamento de todas as etapas de desenvolvimento conforme as suas necessidades.
						</p>
					</div>
					<div className="w-full h-screen backdrop-blur-sm border border-gray-300/20 rounded-lg" data-fillout-id="5quBpsCgsgus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
				</section>
				<Footer />
			</div >
		</>
	);
}