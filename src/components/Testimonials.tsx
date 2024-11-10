import { home } from "@/data";
import { ITestimonialCardProps } from "@/types/testimonial";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
	return (
		<div className="mx-auto w-screen lg:w-11/12 py-[10vh] rounded-2xl lg:rounded-[5vh] shadow-2xl shadow-[var(--background)] overflow-hidden mt-[10vh] bg-[var(--background)] relative">
      <h2 className="text-center text-5xl font-bold mb-3">{home.testimonials.title}</h2>
      <h6 className="text-center text-gray-700">{home.testimonials.description}</h6>
			<div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6 w-9/12 mx-auto mt-[5vh]">
				{home.testimonials.testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial.id} testimonial={testimonial} />
				))}
			</div>
      <div className="bg-gradient-to-b from-transparent via-[var(--background)] to-[var(--background)] w-full h-[30vh] z-10 absolute bottom-0"/>
		</div>
	);
};

export default Testimonials;

const TestimonialCard = ({ testimonial }: ITestimonialCardProps) => {
	return (
		<div className="break-inside-avoid p-8 gap-6 flex flex-col bg-[var(--foreground)] rounded-[2.5vh] ">
			<p className="text-gray-700">{testimonial.content}</p>
			<div className="flex items-center mt-4 border-t border-gray-200 pt-4 gap-4">
				<Image
					src={testimonial.avatar}
					alt={testimonial.name}
					width={40}
					height={40}
					className="rounded-full w-[5vh] h-[5vh] object-cover"
				/>
				<h3 className="text-[var(--background)] text-lg font-semibold">{testimonial.name}</h3>
			</div>
		</div>
	);
};
