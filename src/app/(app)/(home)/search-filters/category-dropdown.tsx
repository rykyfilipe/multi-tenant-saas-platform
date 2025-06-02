"use client"

import {Category} from "@/payload-types";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useRef, useState} from "react";
import {useDropdownPosition} from "@/app/(app)/(home)/search-filters/use-dropdown-position";
import SubcategoryMenu  from "@/app/(app)/(home)/search-filters/subcategory-menu";

interface Props{
	category: Category;
	isActive?: boolean;
	isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
	                                 category,
	                                 isActive,
	                                 isNavigationHovered,
                                 }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { getDropdownPosition } = useDropdownPosition(dropdownRef);

	const onMouseEnter = () => {
		if (category.subcategories) {
			setIsOpen(true);
		}
	};

	const onMouseLeave = () => {
		setIsOpen(false);
	};

	const dropdownPosition = getDropdownPosition();

	return (
		<div
			className="relative"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div ref={dropdownRef} className='relative'>
				<Button
					variant="elevated"
					className={cn(
						"h-11 px-4 text-black bg-transparent rounded-full border-white hover:bg-white hover:border-primary",
						isActive && !isNavigationHovered && "bg-white border-black "
					)}
				>
					{category.name}
				</Button>
				{category.subcategories?.length > 0 && (
					<div
						className={cn(
							"opacity-0 absolute border-b-[10px] -bottom-3 w-0 h-0",
							"border-l-[10px] border-r-[10px]",
							"border-r-transparent border-l-transparent border-b-black",
							"left-1/2 -translate-x-1/2",
							isOpen && "opacity-100"
						)}
					/>
				)}
			</div>

			<SubcategoryMenu
				category={category}
				isOpen={isOpen}
				position={dropdownPosition}
			/>
		</div>
	);
};
