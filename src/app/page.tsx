import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";

export default function Home() {
	return (
		<>
			<Hero />
			<Tools />
			<Services />
			<Projects />
			<Testimonials />
		</>
	);
}
