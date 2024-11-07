"use client";
import { motion } from "framer-motion";
import React from "react";
import Bridge from "./ui/bridge";

const Testimonials = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2, delay: 0.3 }}
			className="h-[10vh] flex justify-center"
		>
      <Bridge className="h-[10.08vh]"/>
		</motion.div>
	);
};

export default Testimonials;
