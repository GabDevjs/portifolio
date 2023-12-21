import Link from "next/link";
import Particles from "../components/particles";
import { BsWhatsapp } from "react-icons/bs";


export default function Obrigado() {
	return (
		<div className="w-screen h-screen ">
			<Particles className="w-screen h-screen" quantity={100
			} />
			<div className="absolute inset-0 flex justify-center flex-col items-center ">
				<h1 className="z-10 text-5xl text-transparent text-edge-outline cursor-default font-bold font-display sm:text-3xl xl:text-7xl 2xl:text-9xl max-w-4xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-2">
					Obrigado por entrar em contato!
				</h1>
				<p className="text-xl text-gray-200 cursor-default font-medium  sm:text-2xl 2xl:text-4xl 2xl:whitespace-nowrap text-center max-w-5xl mb-6">
					Em breve retornarei sua mensagem. caso queira um retorno mais rápido, entre em contato pelo whatsapp.
				</p>

				<div className="flex justify-center items-center gap-4">
					<Link href="/" className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
						Voltar para o início <span className="sr-only">home</span>
					</Link>
					<Link
						href="https://api.whatsapp.com/send?phone=5511981154749&text=Ol%C3%A1!%20%F0%9F%91%8B%20Estou%20interessado(a)%20nos%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20projetos%20que%20voc%C3%AA%20realiza?%20Obrigado!"
						target="_blank"
						className="relative py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
					>
						<BsWhatsapp className="h-5 w-5" />
						Entre em contato
					</Link>
				</div>
			</div>
		</div >
	);
}