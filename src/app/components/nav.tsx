"use client"
import {
	BsFillTelephoneFill,
	BsRocketTakeoffFill,
	BsXLg,
} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavItems } from "./navItems";
import { Card } from "./card";
import { navigation } from "./footer";
import { FaEarthAmericas } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const ItemsNavbarOptions = [
	{
		name: "Sobre",
		icon: FaEarthAmericas,
		href: "/#sobre",
	},
	{
		name: "Projetos",
		icon: AiOutlineFundProjectionScreen,
		href: "/#projetos",
	},
	{
		name: "Contato",
		icon: BsFillTelephoneFill,
		href: "/#contato",
	},
	{
		name: "Orçamento",
		icon: BsRocketTakeoffFill,
		href: "/orcamento",
	},
];

export const Navigation: React.FC<{ home?: boolean }> = ({ home }) => {
	const [navPosition, setNavPosition] = useState(false);
	const [open, setOpen] = useState(false);

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
		<>
			<header className={home ? `border-b  border-transparent ${navPosition && !open && "bg-zinc-900  border-zinc-800"}   transition-colors  animate-fade-in z-50 fixed top-0 inset-x-0` : "z-50 fixed top-0 inset-x-0 border-b  bg-zinc-900  border-zinc-800 transition-colors "}>
				<div className="max-w-6xl flex items-center justify-between pb-2.5 pt-2.5 px-4 mx-auto">
					<Logo />
					<div className="hidden md:inline-flex justify-between gap-5 text-sm items-center">
						<NavItems items={ItemsNavbarOptions} />
					</div>

					<div className="flex md:hidden">
						<button onClick={() => {
							setOpen(!open);
						}} className="flex text-gray-300/90 items-center justify-between w-full text-lg p-1.5 border border-gray-200 border-opacity-10 bg-gray-100 bg-opacity-10 rounded-full hover:scale-110 transition-all duration-200 focus:outline-none">
							<span className="sr-only">Open main menu</span>
							{open ? (
								<BsXLg className="block h-6 w-6" />
							) : (
								<HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</header>

			{open && (
				<div className="fixed inset-0 z-20 bg-neutral-900 animate-fade-card-in pt-16 p-4 overflow-hidden">
					<Card className="flex flex-col items-center h-full px-4">
						<div className="flex flex-col items-center justify-center h-[70%] w-full" onClick={() => {
							setOpen(!open);
						}}>
							<NavItems items={ItemsNavbarOptions} isMobile />
						</div>

						<div className="flex justify-center h-[29%] items-center gap-6 flex-wrap py-4">
							{navigation.social.map((item, index) => (
								<div key={index}>
									<div className="bg-gray-200/10 p-4 hover:scale-125 rounded-full group  flex justify-center flex-col border-2 border-gray-500 border-opacity-40 transition-all duration-300 cursor-pointer">
										<Link href={item.href}
											className="text-gray-200
                    group-hover:text-primary-orange"
											target="_blank"
										>
											<span className="sr-only">{item.name}</span>
											<item.icon className="h-7 w-7" aria-hidden="true" />
										</Link>
									</div>
								</div>
							))}
						</div>
					</Card>
				</div>
			)}
		</>
	);
};
