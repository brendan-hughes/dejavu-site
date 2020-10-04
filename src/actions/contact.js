import axios from 'axios';
import { CONTACT_SUBMIT, CONTACT_FAIL } from './types';

export const submitMessage = (name, email, message) => async (dispatch) => {
	console.log('SUBMITTING!');
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		console.log('Sending message');
		const body = JSON.stringify({ name, email, message });
		try {
			const response = await axios.post('/api/contact', body, config);
		} catch (error) {
			console.log(error);
		}
	} catch (error) {
		console.log(error);
	}
};
