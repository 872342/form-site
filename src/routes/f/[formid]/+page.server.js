import PocketBase from 'pocketbase';

export const actions = {
	default: async ({ params, request }) => {
		const pb = new PocketBase('http://localhost:8090');

		const body = Object.fromEntries(await request.formData());

		try {
			await pb.collection('messages').create({ formid: await params.formid, ...body });
			return { success: 'success' };
		} catch (err) {
			return { error: "That didn't work" };
		}
	}
};
