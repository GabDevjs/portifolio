import Link from "next/link";
import Particles from "./components/particles";

export default function NotFound() {
	return (
		<div className="w-screen h-screen ">
			<Particles className="w-screen h-screen" quantity={300
			} />
			<div className="absolute inset-0 flex justify-center flex-col items-center ">
				<h1 className="z-10 text-5xl text-transparent text-edge-outline cursor-default font-bold font-display sm:text-[10rem] xl:text-[18rem] 2xl:text-[20rem] 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-2">
					404
				</h1>
				<h1 className="text-3xl text-white cursor-default font-bold leading-tight sm:text-4xl 2xl:text-5xl 2xl:whitespace-nowrap text-center mb-6">
					Pagina não encontrada :(
				</h1>

				<Link href="/" className="relative py-1.5 text-sm px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
					Voltar para o início <span className="sr-only">home</span>
				</Link>
			</div>
		</div >
	);
}
