import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { home } from "@/data";
import { cn } from "@/lib/utils";

const Services = () => {
	return (
		<div className="flex flex-col gap-[10vh] mb-[10vh]">
			<div className="bg-[var(--background)] mx-auto w-screen lg:w-9/12 lg:rounded-[5vh] shadow-2xl shadow-[var(--background)] rounded-2xl px-8 py-12 flex-col-center gap-10 lg:p-16">
				<h2 className="text-5xl font-bold ">{home.services.headline}</h2>
				<BentoGrid className=" mx-auto md:auto-rows-[20rem]">
					{home.services.items.map((item, i) => (
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
			<div className="mx-auto w-screen lg:w-9/12 h-[50vh] rounded-[5vh]"></div>
		</div>
	);
};

export default Services;
