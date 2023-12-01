"use client"
import { Popover, Transition } from "@headlessui/react";

import {
	BsFillBasket3Fill,
	BsFillTelephoneFill,
	BsInfoCircleFill,
	BsXLg,
} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavItems } from "./navItems";


const ItemsNavbarOptions = [
	{
		name: "Sobre",
		icon: BsInfoCircleFill,
		href: "#sobre",
	},
	{
		name: "Projetos",
		icon: BsFillBasket3Fill,
		href: "#projetos",
	},
	{
		name: "Contato",
		icon: BsFillTelephoneFill,
		href: "#contato",
	},
];

export const Navigation: React.FC = () => {
	const [navPosition, setNavPosition] = useState(false);

	const listenScrollEvent = () => {
		window.scrollY > 50
			? setNavPosition(true)
			: setNavPosition(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	return (
		<header className={`border-b  border-transparent ${navPosition && "bg-zinc-900  border-zinc-800"}   transition-colors  animate-fade-in z-50 fixed top-0 inset-x-0`}>
			<Popover
				as="nav"
			>
				{({ open }) => (
					<>
						<div className="max-w-6xl flex items-center justify-between py-2.5 px-4 mx-auto">
							<Logo />
							<div className="hidden md:inline-flex justify-between gap-8  items-center">
								<NavItems items={ItemsNavbarOptions} />
							</div>

							{/* Mobile menu button */}
							<div className=" flex md:hidden">
								<Popover.Button className="flex text-gray-300/90 items-center justify-between w-full text-lg p-1.5 border border-gray-200 border-opacity-10 bg-gray-100 bg-opacity-10 rounded-full hover:scale-110 transition-all duration-200 focus:outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<BsXLg className="block h-6 w-6" />
									) : (
										<HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
									)}
								</Popover.Button>
							</div>

						</div>
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-100 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Popover.Panel className="md:hidden absolute right-5 backdrop-blur-sm bg-neutral-800/90 border border-gray-100/20 px-5 rounded-xl md:rounded-full mt-2 py-2">
								<div className="border-b border-black border-opacity-5 space-y-4 ">
									{ItemsNavbarOptions.map((item: any, index: any) => {
										return (
											<span
												key={index}
												className="flex justify-center items-center h-full w-full py-2 px-3 "
											>
												<Popover.Button>
													<Link
														href={item.href}
														className="text-lg xl:text-base  text-stone-800 dark:text-stone-200 font-medium hover:scale-110 transition-all flex justify-between items-center cursor-pointer"
														onClick={() => {
															open = !open;
														}}
													>
														{item.name}
													</Link>
												</Popover.Button>
											</span>
										);
									})}
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</header>
	);
};
