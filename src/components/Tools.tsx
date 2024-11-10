"use client";
import { motion } from "framer-motion";
import React from "react";
import Bridge from "./ui/bridge";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { tools } from "@/lib/marquee";
import { skillsImage } from "@/lib/skill-image";

const Tools = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2, delay: 0.3 }}
			className="h-[10vh] flex justify-center relative"
		>
			<Marquee
				gradient={false}
				speed={80}
				pauseOnHover={true}
				pauseOnClick={true}
				delay={0}
				play={true}
				direction="left"
			>
				{tools.map((tool, id) => (
					<div
						key={id}
						className="w-36 min-w-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
					>
						<div className="flex flex-col items-center justify-center gap-3 ">
							<div className="h-[3vh]">
								<Image
									src={skillsImage(tool)?.src}
									alt={tool}
									width={40}
									height={40}
									className="h-full w-auto rounded-lg "
								/>
							</div>
							<p className="text-[var(--foreground)] text-sm sm:text-lg">
								{tool}
							</p>
						</div>
					</div>
				))}
			</Marquee>
			<Bridge className="h-[10.1vh] z-50 absolute" />
		</motion.div>
	);
};

export default Tools;
