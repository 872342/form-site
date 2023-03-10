import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals, url, cookies }) => {
	const redirectURL = `${url.origin}/callback`;
	const expectedState = cookies.get('state');

	const query = new URLSearchParams(url.search);
	const state = query.get('state');
	const code = query.get('code');

	console.log(state, code, ' ye? ');

	const authMethods = await locals.pb?.collection('users').listAuthMethods();
	if (!authMethods?.authProviders) {
		console.log('no authy providers');
		throw redirect(303, '/login');
	}
	const provider = authMethods.authProviders[0];
	if (!provider) {
		console.log('Provider not found');
		throw redirect(303, '/login');
	}

	if (expectedState !== state) {
		console.log('state does not match expected', expectedState, state);
		throw redirect(303, '/login');
	}

	try {
		await locals.pb
			?.collection('users')
			.authWithOAuth2(provider.name, code || '', provider.codeVerifier, redirectURL);
	} catch (err) {
		console.log('Error logging in with 0Auth user', err);
	}
	console.log('callback going dash');
	throw redirect(303, '/dash');
};
