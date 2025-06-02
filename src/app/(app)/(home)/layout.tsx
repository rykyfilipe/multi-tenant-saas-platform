/** @format */
import configPrimise from '@payload-config';
import {getPayload} from 'payload';
import Navbar from "@/app/(app)/(home)/navbar";
import Footer from "./footer";
import SearchFilters from "@/app/(app)/(home)/search-filters";
import {Category} from "@/payload-types";
interface Props {
	children: React.ReactNode;
}


async  function Layout({ children }: Props) {


	const payolod = await getPayload({
		config:configPrimise
	});

	const data = await payolod.find({
		collection:"categories",
		depth:1,
		pagination:false,
		where:{
			parent:{
				exists:false
			}
		}
	});

	const formattedData = data.docs.map(doc =>({
		...doc,
		subcategories:(doc.subcategories?.docs ?? []).map(doc =>({
			...(doc as Category),
		}))
	}));


	return (
		<div className='flex flex-col min-h-screen '>
			<Navbar />
			<SearchFilters data={formattedData} />
			<div className='flex-1 bg-[#F4F4F0]'>{children}</div>
			<Footer />
		</div>
	);
}

export default Layout;
