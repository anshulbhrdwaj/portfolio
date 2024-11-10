import { Timeline } from "@/components/ui/timeline";
import { home } from "@/data";
import React from "react";

const Projects = () => {
	return (
		<div className="flex bg-[var(--background)] mx-auto w-screen lg:w-11/12 rounded-2xl lg:rounded-[5vh] shadow-2xl shadow-[var(--background)] overflow-hidden">
			<Timeline data={home.projects} />
		</div>
	);
};

export default Projects;
