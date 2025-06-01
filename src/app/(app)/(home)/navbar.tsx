/** @format */

"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});

interface NavbarItemProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
	return (
		<Link href={href}>
			<Button
				variant='outline'
				className={cn(
					"bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
					isActive && "bg-black text-white hover:bg-black hover:text-white",
				)}>
				{children}
			</Button>
		</Link>
	);
};

const navbarItems = [
	{
		href: "/",
		children: "Home",
	},
	{
		href: "/about",
		children: "About",
	},
	{
		href: "/features",
		children: "Features",
	},
	{
		href: "/pricing",
		children: "Pricing",
	},
	{
		href: "/contact",
		children: "Contact",
	},
];

function Navbar() {
	const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<nav
			className='h-20 flex border-b justify-between font-medium
			bg-white'>
			<Link href='/' className='flex pl-6 items-center'>
				<span className={cn("text-5xl font-semibold", poppins.className)}>
					funroad
				</span>
			</Link>
			<NavbarSidebar
				open={isSidebarOpen}
				onOpenChange={setIsSidebarOpen}
				items={navbarItems}
			/>
			<div className=' items-center gap-4 hidden lg:flex'>
				{navbarItems.map((item) => (
					<NavbarItem
						key={item.href}
						href={item.href}
						isActive={pathname === item.href}>
						{item.children}
					</NavbarItem>
				))}
			</div>

			<div className='hidden lg:flex '>
				<Button
					asChild
					variant='secondary'
					className='border-l border-t-0 border-b-0 boreder-r-0 p-10 h-full rounded-none bg-white
				hover:bg-pink-400 transition-colors text-lg '>
					<Link href='/sign-in'>Login</Link>
				</Button>
				<Button
					asChild
					className='border-l border-t-0 border-b-0 boreder-r-0 p-10 h-full rounded-none bg-black
				hover:bg-pink-400 hover:text-black transition-colors text-lg '>
					<Link href='/sign-up'>Start selling</Link>
				</Button>
			</div>
			<div className='flex lg:hidden items-center justify-center'>
				<Button
					variant='ghost'
					className='size-12 border-transparent bg-white'
					onClick={() => setIsSidebarOpen(true)}>
					<MenuIcon></MenuIcon>
				</Button>
			</div>
		</nav>
	);
}

export default Navbar;
