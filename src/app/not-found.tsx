

import Link from "next/link";
import Particles from "./components/particles";
import { Particles3d } from "./components/particles3d";


export default function NotFound() {
	return (
		<div className="w-screen h-screen">
			<Particles className="w-screen h-screen" quantity={500
			} />
			<div className="absolute inset-0 flex justify-center flex-col items-center ">
				<h1 className="z-10 text-5xl text-transparent text-edge-outline cursor-default font-bold font-display sm:text-8xl lg:text-9xl 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-2">
					404
				</h1>
				<h1 className="text-3xl text-white cursor-default font-bold leading-tight sm:text-4xl 2xl:text-5xl 2xl:whitespace-nowrap text-center mb-6">
					Not Found :(
				</h1>

				<Link href="/" className="text-white cursor-pointer font-bold text-xl rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black underline underline-offset-3">
					Go Home
				</Link>
			</div>
		</div >
	);
}
