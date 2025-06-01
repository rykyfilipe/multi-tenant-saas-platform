'use client';

import {useEffect} from 'react';

export default function Error({error, reset}: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="p-4">
			<h2>Ceva nu a funcționat corect!</h2>
			<button onClick={() => reset()}>Încearcă din nou</button>
		</div>
	);
}
