import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// if(event.locals.pb.authStore.isValid){
	//     event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
	// }
	// else {
	//     event.locals.user = undefined
	// }

	try {
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh());
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	if (event.url.pathname.startsWith('/dash')) {
		if (!event.locals.user) {
			throw redirect(303, '/login');
		}
	} else if (event.url.pathname.startsWith('/login')) {
		if (event.locals.user) {
			throw redirect(303, '/dash');
		}
	}

	const response = await resolve(event);
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
	return response;
};
