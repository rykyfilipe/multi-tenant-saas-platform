/** @format */

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";

interface NavbarItem {
	href: string;
	children: React.ReactNode;
}

interface Props {
	items: NavbarItem[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent side='left' className='p-0 transition-none'>
				<SheetHeader className='p-4 border-b'>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<ScrollArea>
					{items.map((item) => (
						<Link
							href={item.href}
							key={item.href}
							onClick={() => onOpenChange(false)}
							className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
							{item.children}
						</Link>
					))}
					<div className='border-t'>
						<Link
							href='/sign-in'
							className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
							Log in{" "}
						</Link>
						<Link
							href='/sign-up'
							className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
							Start selling
						</Link>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};
