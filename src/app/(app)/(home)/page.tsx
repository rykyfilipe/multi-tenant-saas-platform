/** @format */
import configPrimise from '@payload-config';
import {getPayload} from 'payload';


export default async function Home() {

	const payolod = await getPayload({
		config:configPrimise
	});

	const data = await payolod.find({
		collection:"categories"
	});

	return (
		<div className='flex flex-col gap-y-4 p-4'>
			{JSON.stringify(data,null,2)}
		</div>
	);
}
