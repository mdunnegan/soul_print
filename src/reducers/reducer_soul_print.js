import { UPDATE_FIRST_NAME,
		 UPDATE_LAST_NAME,
		 UPDATE_DATE_OF_BIRTH,
		 UPDATE_DATE_OF_PASSING 
} from '../actions/soul_print';

export const initialState = {
	firstName: {
		value: '',
		offset: 140,
		valueType: 'text'
	},
	lastName: {
		value: '',
		offset: 320,
		valueType: 'text'
	},
	dateOfBirth: {
		value: '',
		offset: 220,
		valueType: 'date'
	},
	dateOfPassing: {
		value: '',
		offset: 40,
		valueType: 'date'
	}
};

export default function(state = initialState, action) {
	switch(action.type) {
		case UPDATE_FIRST_NAME:
			return { ...state, firstName: { ...state.firstName, value: action.payload.firstName }};
		case UPDATE_LAST_NAME:
			return { ...state, lastName: { ...state.lastName, value: action.payload.lastName }};
		case UPDATE_DATE_OF_BIRTH:
			return { ...state, dateOfBirth: { ...state.dateOfBirth, value: action.payload.dateOfBirth }};
		case UPDATE_DATE_OF_PASSING:
			return { ...state, dateOfPassing: { ...state.dateOfPassing, value: action.payload.dateOfPassing }};
		default:
			return state;
	}
}
