"use client";

import { Popover, Transition } from "@headlessui/react";

import {
	BsFillBasket3Fill,
	BsFillTelephoneFill,
	BsInfoCircleFill,
	BsXLg,
} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
		href: "#Projetos",
	},
	{
		name: "Contato",
		icon: BsFillTelephoneFill,
		href: "#contato",
	},
];


export const Navigation: React.FC = () => {
	return (
		<header className="bg-zinc-900/500 animate-fade-in border-zinc-800 backdrop-blur  duration-200 border-b z-50 fixed top-0 inset-x-0">
			<Popover
				as="nav"
				className=" "
			>
				{({ open }) => (
					<>
						<div className="max-w-7xl flex items-center justify-between p-4 mx-auto">
							<Logo />
							<div className="hidden md:inline-flex justify-between gap-8  items-center">
								<NavItems items={ItemsNavbarOptions} />
							</div>

							{/* Mobile menu button */}
							<div className=" flex md:hidden">
								<Popover.Button className="flex text-gray-300/90 items-center justify-between w-full text-lg p-1.5 border border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full hover:scale-110 transition-all duration-200 focus:outline-none">
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
							<Popover.Panel className="md:hidden absolute right-5 vidro bg-gray-300/10 border border-gray-100/20 px-5  rounded-xl   md:rounded-full mt-2">
								<div className="space-y-1 px-2 py-1">
									<div className="border-b  border-black border-opacity-5 space-y-4 ">
										{ItemsNavbarOptions.map((item: any, index: any) => {
											return (
												<span
													key={index}
													className="flex justify-center items-center h-full w-full py-2 px-3"
												>
													<Popover.Button>
														<Link
															href={item.href}
															className="text-base xl:text-base  text-stone-800 dark:text-stone-200 font-medium hover:scale-110 transition-all flex justify-between items-center cursor-pointer"
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
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</header>
	);
};
