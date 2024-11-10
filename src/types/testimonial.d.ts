export interface ITestimonial {
	id: number;
	name: string;
	avatar: string;
	content: string;
}

// ==========> PROPS
export interface ITestimonialCardProps {
	testimonial: ITestimonial;
}
