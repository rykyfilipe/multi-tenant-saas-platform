import {Category} from "@/payload-types";
import {CategoryDropdown} from "@/app/(app)/(home)/search-filters/category-dropdown";

interface Props{
	data:Category[];
}

export const Categories = ({data}:Props) => {



	return <div className="relative w-full">
		<div className="flex flex-nowrap items-center gap-2">
			{data.data.map((category : Category) => (
				<div key={category.id}>
					<CategoryDropdown
						category={category}
						isActive={false}
						isNavigationHovered={false}
					/>
				</div>
			))}
		</div>
	</div>
}