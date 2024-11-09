"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { home } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Services = () => {
	return (
		<div className="flex flex-col gap-[10vh] mb-[10vh] ">
			<div className="bg-[var(--background)] mx-auto w-screen lg:w-9/12 lg:rounded-[5vh] shadow-2xl shadow-[var(--background)] rounded-2xl px-8 py-12 flex-col-center gap-10 lg:p-16">
				<h2 className="text-5xl font-bold ">{home.services.headline}</h2>
				<BentoGrid className=" mx-auto md:auto-rows-[20rem]">
					{home.services.steps.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							header={item.header}
							className={cn("[&>p:text-lg] z-10", item.className)}
							icon={item.icon}
						/>
					))}
				</BentoGrid>
			</div>
			<div className="px-10 lg:p-0 mx-auto w-screen lg:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{home.services.perks.map((perk) => (
					<div
						key={perk.id}
						className="flex flex-col text-[var(--background)] text-3xl gap-1 my-6"
					>
						<Image
							src={perk.icon}
							width={50}
							height={50}
							alt="Stack Layers Icon"
						/>
						<h4 className="font-bold flex flex-col ">
							{perk.heading.perk} <span>{perk.heading.of}</span>
						</h4>
						<p className="font-semibold opacity-60 flex flex-col text-lg">
							{perk.para.perk} <span>{perk.para.goal}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
