"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, scale, slide } from "@/utils/Header/anim";

import Link from "next/link";
import { navbar } from "@/data";
import { IHamburgerProps, INavLinkProps } from "@/types";

const Navbar = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<header id="navbar" className="absolute inset-0">
			<div className="flex-row-between h-[5vh] p-8 xl:p-10 z-40 sticky inset-0 backdrop-blur-sm border-b-[0.5px] rounded-b-[5vh] border-opacity-20 border-gray-400 ">
				<div
					id="logo"
					className="relative text-3xl xl:text-4xl font-bold text-gradient "
				>
					<span className="text-[var(--foreground)]">{"<"}</span>
					<span className="">{"Umang"}</span>
					<span className="text-[var(--foreground)]">{"/>"}</span>
				</div>

				<HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
				<AnimatePresence>{isActive && <Nav />}</AnimatePresence>
			</div>
		</header>
	);
};

export default Navbar;

const HamburgerMenu = ({ isActive, setIsActive }: IHamburgerProps) => {
	return (
		<div
			id="hamburger-menu"
			onClick={() => setIsActive((active) => !active)}
			className=" right-0 z-[9999] w-14 h-14 rounded-full  cursor-pointer flex-row-center"
		>
			<motion.div
				id="hamburger"
				className={`w-full flex-col-center ${
					isActive ? "hamburger-active" : ""
				}`}
			>
				<motion.span
					className="relative h-px w-1/2 bg-white "
					animate={{
						rotate: isActive ? 45 : 0,
						y: isActive ? 0 : -5,
					}}
				/>
				<motion.span
					className="relative h-px w-1/2 bg-white "
					animate={{
						rotate: isActive ? -45 : 0,
						y: isActive ? 0 : 5,
					}}
				/>
			</motion.div>
		</div>
	);
};

const Nav = () => {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);
	return (
		<motion.nav
			className={`h-screen w-full sm:w-[40vw] xl:w-[25vw] bg-gradient-layout fixed z-40 right-0 top-0 text-white backdrop-blur-3xl`}
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<Curve />
			<div className={`h-full w-full p-10 flex-col-between`}>
				<div
					className={`text-gray-300 border-b-[1px] border-b-gray-300 uppercase text-sm z-10 relative top-0 w-60 `}
				>
					<p>Navigation</p>
				</div>

				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname);
					}}
					className={`flex flex-col text-5xl gap-6`}
				>
					{navbar.links.map((navItem) => {
						return (
							<NavLink
								key={navItem.id}
								data={navItem}
								isActive={selectedIndicator == navItem.href}
								setSelectedIndicator={setSelectedIndicator}
							/>
						);
					})}
				</div>

				<div className={`flex-row-between w-full text-sm gap-2 lg:gap-4`}>
					<a>Awwwards</a>
					<a>Instagram</a>
					<a>Dribble</a>
					<a>LinkedIn</a>
				</div>
			</div>
		</motion.nav>
	);
};

const Curve = () => {
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => setHeight(window.innerHeight);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const initialPath = `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`;
	const targetPath = `M100 0 L100 ${height} Q100 ${height / 2} 100 0`;

	const curve = {
		initial: { d: initialPath },
		enter: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	};

	return (
		<svg className="absolute top-0 left-[-99px] w-[100px] h-full">
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop
						offset="0%"
						style={{ stopColor: "var(--from)", stopOpacity: 1 }}
					/>
					<stop
						offset="100%"
						style={{ stopColor: "var(--via)", stopOpacity: 1 }}
					/>
				</linearGradient>
			</defs>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
				fill="url(#gradient)" // Reference the gradient here
			/>
		</svg>
	);
};

const NavLink = ({ data, isActive, setSelectedIndicator }: INavLinkProps) => {
	const { title, href, id } = data;

	return (
		<motion.div
			className={`relative flex items-center text-white font-[300]`}
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={id}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className={`w-2 h-2 bg-white rounded-full absolute -left-7`}
			></motion.div>

			<Link href={href}>{title}</Link>
		</motion.div>
	);
};
