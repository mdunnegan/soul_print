import { UPDATE_FIRST_NAME,
		 UPDATE_FIRST_NAME_LINE_COLOR,
		 UPDATE_FIRST_NAME_CIRCLE_COLOR,
		 UPDATE_LAST_NAME,
		 UPDATE_LAST_NAME_LINE_COLOR,
		 UPDATE_LAST_NAME_CIRCLE_COLOR,
		 UPDATE_DATE_OF_BIRTH,
		 UPDATE_DATE_OF_BIRTH_LINE_COLOR,
		 UPDATE_DATE_OF_BIRTH_CIRCLE_COLOR,
		 UPDATE_DATE_OF_PASSING,
		 UPDATE_DATE_OF_PASSING_LINE_COLOR,
		 UPDATE_DATE_OF_PASSING_CIRCLE_COLOR
} from '../actions/soul_print';

export const initialState = {
	firstName: {
		value: '',
		offset: 140,
		valueType: 'text',
		lineColor: 'black',
		circleColor: 'black'
	},
	lastName: {
		value: '',
		offset: 320,
		valueType: 'text',
		lineColor: 'black',
		circleColor: 'black',
	},
	dateOfBirth: {
		value: '',
		offset: 220,
		valueType: 'date',
		lineColor: 'black',
		circleColor: 'black'
	},
	dateOfPassing: {
		value: '',
		offset: 40,
		valueType: 'date',
		lineColor: 'black',
		circleColor: 'black'
	}
};

export default function(state = initialState, action) {
	switch(action.type) {

		case UPDATE_FIRST_NAME:
			return { ...state, firstName: { ...state.firstName, value: action.payload.firstName.toLowerCase() }};
		case UPDATE_FIRST_NAME_LINE_COLOR:
			return { ...state, firstName: { ...state.firstName, lineColor: action.payload.color }};
		case UPDATE_FIRST_NAME_CIRCLE_COLOR:
			return { ...state, firstName: { ...state.firstName, circleColor: action.payload.color }};

		case UPDATE_LAST_NAME:
			return { ...state, lastName: { ...state.lastName, value: action.payload.lastName.toLowerCase() }};
		case UPDATE_LAST_NAME_LINE_COLOR:
			return { ...state, lastName: { ...state.lastName, lineColor: action.payload.color }};
		case UPDATE_LAST_NAME_CIRCLE_COLOR:
			return { ...state, lastName: { ...state.lastName, circleColor: action.payload.color }};

		case UPDATE_DATE_OF_BIRTH:
			return { ...state, dateOfBirth: { ...state.dateOfBirth, value: action.payload.dateOfBirth.toLowerCase() }};
		case UPDATE_DATE_OF_BIRTH_LINE_COLOR:
			return { ...state, dateOfBirth: { ...state.dateOfBirth, lineColor: action.payload.color }};
		case UPDATE_DATE_OF_BIRTH_CIRCLE_COLOR:
			return { ...state, dateOfBirth: { ...state.dateOfBirth, circleColor: action.payload.color }};

		case UPDATE_DATE_OF_PASSING:
			return { ...state, dateOfPassing: { ...state.dateOfPassing, value: action.payload.dateOfPassing.toLowerCase() }};
		case UPDATE_DATE_OF_PASSING_LINE_COLOR:
			return { ...state, dateOfPassing: { ...state.dateOfPassing, lineColor: action.payload.color }};
		case UPDATE_DATE_OF_PASSING_CIRCLE_COLOR:
			return { ...state, dateOfPassing: { ...state.dateOfPassing, circleColor: action.payload.color }};

		default:
			return state;
	}
}
