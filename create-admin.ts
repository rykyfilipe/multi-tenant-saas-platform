import payload from 'payload';
import configPromise from '@payload-config'
import { getPayload } from 'payload'

(async () => {
	await payload.init({
		config: configPromise,
	});

	const user = await payload.create({
		collection: 'users', // sau cum se numește colecția ta de utilizatori
		data: {
			email: 'admin@exemplu.com',
			password: 'parola123',
		},
	});

	console.log('✅ Utilizator creat:', user);
	process.exit(0);
})();
