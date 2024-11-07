"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { home } from "@/data";
import { GradientBorderButton } from "@/components/ui/buttons";
import Link from "next/link";
import React from 'react'

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision className="flex-col-center gap-4 bg-[var(--background)] h-[90vh] rounded-b-[5vh] pt-8 xl:pt-10">
			<h2 className="text-2xl relative  z-20 md:text-4xl lg:text-7xl font-bold text-center text-[var(--foreground)] font-sans tracking-tight">
				{home.hero.headline}
				<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
					<div className="absolute left-0 top-[1px] text-gradient py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
						{home.hero.statement}
					</div>
					<div className="relative text-gradient py-4">
						{home.hero.statement}
					</div>
				</div>
			</h2>
			<div className="flex-col-center md:flex md:flex-row md:text-lg lg:text-xl gap-3 md:gap-10 font-semibold z-10">
				<GradientBorderButton className="rounded-full">
					{home.hero.cta}
				</GradientBorderButton>
				<Link href={"#"} className="group text-gradient flex-col-center ">
					{home.hero.cta2}
				</Link>
			</div>
		</BackgroundBeamsWithCollision>
  )
}

export default Hero