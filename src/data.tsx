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
		headline: "Your Website Shouldn’t Just Exist, ",
		statement: " It Should Sell. 🚀",
		tagline:
			"Stop losing leads and sales. Get a high-converting site that drives real revenue effortlessly.",
		cta: "Boost My Conversions",
		cta2: "See How",
	},
	services: {
		headline: "How We Make Your Website High Converting",
		items: [
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
	},
};
