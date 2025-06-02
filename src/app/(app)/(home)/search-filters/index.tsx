import {SearchInput} from "@/app/(app)/(home)/search-filters/search-input";
import {Categories} from "@/app/(app)/(home)/search-filters/categories";

interface Props {
	data:any;
}
function SearchFilters(data:Props) {
	return (
		<div className="px-4 lg:px-12 border-b flex py-8 flex-col w-full gap-4">
			<SearchInput disable={false}/>
			<Categories data={data}/>
		</div>
	)
}

export default SearchFilters;
