import {
	IconBoxAlignRightFilled,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import {
	CardsSkeleton,
	ChatSkeleton,
	ContentSkeleton,
	GradientSkeleton,
	TechSkeleton,
} from "./components/BentoSkeletons";
import Image from "next/image";

export const navbar = {
	links: [
		{ id: 1, title: "Home", href: "/" },
		{ id: 2, title: "Work", href: "/work" },
		{ id: 3, title: "About", href: "/about" },
		{ id: 4, title: "Contact", href: "/contact" },
	],
	socialLinks: [
		{ id: 1, platform: "Instagram", link: "", icon: "" },
		{ id: 2, platform: "LinkedIn", link: "", icon: "" },
		{ id: 3, platform: "Github", link: "", icon: "" },
	],
};
export const home = {
	hero: {
		title: "Your Website Shouldn’t Just Exist, ",
		statement: " It Should Sell. 🚀",
		description:
			"Stop losing leads and sales. Get a high-converting site that drives real revenue effortlessly.",
		cta: "Boost My Conversions",
		cta2: "See How",
	},
	services: {
		title: "How We Make Your Website High Converting",
		steps: [
			{
				title: "AI Content Generation",
				description: (
					<span className="text-sm">
						Experience the power of AI in generating unique content.
					</span>
				),
				header: <ChatSkeleton />,
				className: "md:col-span-1",
				icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
			},
			{
				title: "Automated Proofreading",
				description: (
					<span className="text-sm">
						Let AI handle the proofreading of your documents.
					</span>
				),
				header: <ContentSkeleton />,
				className: "md:col-span-1",
				icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
			},
			{
				title: "Contextual Suggestions",
				description: (
					<span className="text-sm">
						Get AI-powered suggestions based on your writing context.
					</span>
				),
				header: <GradientSkeleton />,
				className: "md:col-span-1",
				icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
			},
			{
				title: "Sentiment Analysis",
				description: (
					<span className="text-sm">
						Understand the sentiment of your text with AI analysis.
					</span>
				),
				header: <CardsSkeleton />,
				className: "md:col-span-2",
				icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
			},

			{
				title: "Text Summarization",
				description: (
					<span className="text-sm">
						Summarize your lengthy documents with AI technology.
					</span>
				),
				header: <TechSkeleton />,
				className: "md:col-span-1",
				icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
			},
		],
		perks: [
			{
				id: 1,
				icon: "/stack-layers.svg",
				heading: {
					perk: "Unlimited",
					of: " design requests",
				},
				para: {
					perk: "Request unlimited design revisions and new",
					goal: " projects to fully realize your vision.",
				},
			},
			{
				id: 2,
				icon: "/lighting.svg",
				heading: {
					perk: "Unlimited",
					of: " design requests",
				},
				para: {
					perk: "Request unlimited design revisions and new",
					goal: " projects to fully realize your vision.",
				},
			},
			{
				id: 3,
				icon: "/user.svg",
				heading: {
					perk: "Unlimited",
					of: " design requests",
				},
				para: {
					perk: "Request unlimited design revisions and new",
					goal: " projects to fully realize your vision.",
				},
			},
			{
				id: 4,
				icon: "/design.svg",
				heading: {
					perk: "Unlimited",
					of: " design requests",
				},
				para: {
					perk: "Request unlimited design revisions and new",
					goal: " projects to fully realize your vision.",
				},
			},
			{
				id: 5,
				icon: "/cost.svg",
				heading: {
					perk: "Unlimited",
					of: " design requests",
				},
				para: {
					perk: "Request unlimited design revisions and new",
					goal: " projects to fully realize your vision.",
				},
			},
			{
				id: 6,
				icon: "/strategy.svg",
				heading: {
					perk: "Unlimited",
					of: " design requests",
				},
				para: {
					perk: "Request unlimited design revisions and new",
					goal: " projects to fully realize your vision.",
				},
			},
		],
	},
	projects: [
		{
			title: "2024",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Built and launched Aceternity UI and Aceternity UI Pro from scratch
					</p>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://assets.aceternity.com/templates/startup-1.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/templates/startup-2.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/templates/startup-3.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/templates/startup-4.webp"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: "Early 2023",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						I usually run out of copy, but when I see content this big, I try to
						integrate lorem ipsum.
					</p>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Lorem ipsum is for people who are too lazy to write copy. But we are
						not. Here are some more example of beautiful designs I built.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://assets.aceternity.com/pro/hero-sections.png"
							alt="hero template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/features-section.png"
							alt="feature template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/pro/bento-grids.png"
							alt="bento template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/cards.png"
							alt="cards template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: "Changelog",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
						Deployed 5 new components on Aceternity today
					</p>
					<div className="mb-8">
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Card grid component
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Startup template Aceternity
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Random file upload lol
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Himesh Reshammiya Music CD
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Salman Bhai Fan Club registrations open
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://assets.aceternity.com/pro/hero-sections.png"
							alt="hero template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/features-section.png"
							alt="feature template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/pro/bento-grids.png"
							alt="bento template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://assets.aceternity.com/cards.png"
							alt="cards template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
	],
	testimonials: {
		title: "Words of Appreciation",
		description:
			"Discover what our clients/partners have to say about our design services.",
		testimonials: [
			{
				id: 1,
				name: "Sophia Brown",
				avatar:
					"https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				content: `"Dejan is an outstanding designer who excels at quickly developing concepts and effectively incorporating feedback. His work consistently meets high standards of quality. I wholeheartedly recommend him!"`,
			},
			{
				id: 2,
				name: "Chris Wilson",
				avatar:
					"https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				content: `"Dejan and his studio provided exceptional Custom UX/UI Design services at a cost-effective rate. He quickly grasped our vision and delivered high-quality results on schedule.His creativity, attention to detail, and efficiency were evident throughout the project."`,
			},
			{
				id: 3,
				name: "Emily White",
				avatar:
					"https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				content: `"Dejan’s creativity and attention to detail were just what our team needed. We’ve received amazing feedback on our redesigned interface!"`,
			},
			{
				id: 4,
				name: "Jane Smith",
				avatar:
					"https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				content: `"Dejan is a very talented designer. He works quickly and has a great eye for detail. His designs are always high-quality and look great. Dejan is patient, listens well, and makes changes fast. We highly recommend him."`,
			},
			{
				id: 5,
				name: "John Doe",
				avatar:
					"https://images.unsplash.com/photo-1661430902921-1e5b84ea87ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				content: `"The designs that Dejan produced have exceeded our expectations. We look forward to collaborating with him on future projects."`,
			},
			{
				id: 6,
				name: "David Lee",
				avatar:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3",
				content: `"I had the pleasure of having Dejan as a chief design officer and a trusted partner at iTnnovate. During that time, he rebranded our company and worked hard on making our solutions more user-friendly. He also implemented a work process that we still use today. We've been collaborating for over 8 years, and I highly recommend him!"`,
			},
			{
				id: 7,
				name: "Anna Kim",
				avatar:
					"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3",
				content: `"Since 2023, we have had the privilege of working with Dejan. His exceptional UX and design skills have made him an indispensable member of our team. His contributions have significantly enhanced our projects, and we highly recommend his expertise to anyone seeking top-tier design services."`,
			},
			{
				id: 8,
				name: "Mark Robinson",
				avatar:
					"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3",
				content: `"Dejan is fantastic to work with. He is very responsive, respects deadlines, and has excellent design skills. I look forward to working with him again! His attention to detail and creativity consistently exceed expectations."`,
			},
			{
				id: 9,
				name: "Olivia Martin",
				avatar:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3",
				content: `"Dejan’s expertise and eye for design have been instrumental in our project’s success. He was flexible and accommodating throughout the process."`,
			},
		],
	},
};
