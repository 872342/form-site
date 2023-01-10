import { serializeNonPOJOs } from '../../lib/utils';

const getData = async (event) => {
	try {
		const resultList = await event.locals.pb.collection('forms').getFullList(200, {
			sort: '-created'
		});
		const forms = serializeNonPOJOs(resultList);

		const messagesList = await event.locals.pb.collection('messages').getFullList(200, {
			sort: '-created'
		});
		const messages = serializeNonPOJOs(messagesList);

		return {
			forms,
			messages
		};
	} catch (err) {
		return { error: 'error' };
	}
};

export async function load(event) {
	return await getData(event);
}

export const actions = {
	create: async (event) => {
		const data = await event.request.formData();
		const { title } = Object.fromEntries(data);
		try {
			try {
				const resultList = await event.locals.pb.collection('forms').getFullList(200, {});
				const forms = serializeNonPOJOs(resultList);
				if (forms.length >= 5) return { error: 'You can only have 5 active forms' };
			} catch (err) {
				return { error: 'error' };
			}

			await event.locals.pb.collection('forms').create({ owner: event.locals.user.id, title });
			return await getData(event);
		} catch (err) {
			return { error: 'error' };
		}
	},

	delete: async (event) => {
		const formData = await event.request.formData();
		const { id } = Object.fromEntries(formData);

		try {
			const msgsList = await event.locals.pb.collection('messages').getFullList(500, {
				filter: `formid = "${id}"`
			});
			const msgs = serializeNonPOJOs(msgsList);

			try {
				for (let msg of msgs) {
					await event.locals.pb.collection('messages').delete(msg.id);
				}
			} catch (err) {
				return { error: 'error' };
			}
		} catch (err) {
			return { error: 'error' };
		}

		try {
			await event.locals.pb.collection('forms').delete(id);
			return await getData(event);
		} catch (err) {
			return { error: 'error' };
		}
	}
};
