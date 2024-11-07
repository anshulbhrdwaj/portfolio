"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GradientBorderButton = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<motion.div className={cn("p-[2px] rounded-xl bg-gradient-layout", className)}>
			<motion.button className="px-4 py-2 rounded-full bg-[var(--background)] ">
				<span className="text-gradient">
					{children}
				</span>
			</motion.button>
		</motion.div>
	);
};
