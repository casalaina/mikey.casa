import Prismic from '@prismicio/client';

const Client = Prismic.client(import.meta.env.VITE_PRISMIC_API_ENDPOINT, {
	accessToken: import.meta.env.VITE_PRISMIC_API_TOKEN
});

export default Client;
