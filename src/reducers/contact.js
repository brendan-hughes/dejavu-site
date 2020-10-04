import { CONTACT_SUBMIT, CONTACT_FAIL } from '../actions/types';

const initialState = {
	success: '',
	error: '',
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case CONTACT_SUBMIT:
			return payload;
		case CONTACT_FAIL:
			return {
				success: '',
				error: 'There has been an error. Please try again later.',
			};
		default:
			return state;
	}
}
