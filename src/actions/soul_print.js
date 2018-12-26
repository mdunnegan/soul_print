export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_FIRST_NAME_LINE_COLOR = 'UPDATE_FIRST_NAME_LINE_COLOR';
export const UPDATE_FIRST_NAME_CIRCLE_COLOR = 'UPDATE_FIRST_NAME_CIRCLE_COLOR';

export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_LAST_NAME_LINE_COLOR = 'UPDATE_LAST_NAME_LINE_COLOR';
export const UPDATE_LAST_NAME_CIRCLE_COLOR = 'UPDATE_LAST_NAME_CIRCLE_COLOR';

export const UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH';
export const UPDATE_DATE_OF_BIRTH_LINE_COLOR = 'UPDATE_DATE_OF_BIRTH_LINE_COLOR';
export const UPDATE_DATE_OF_BIRTH_CIRCLE_COLOR = 'UPDATE_DATE_OF_BIRTH_CIRCLE_COLOR';

export const UPDATE_DATE_OF_PASSING = 'UPDATE_DATE_OF_PASSING';
export const UPDATE_DATE_OF_PASSING_LINE_COLOR = 'UPDATE_DATE_OF_PASSING_LINE_COLOR';
export const UPDATE_DATE_OF_PASSING_CIRCLE_COLOR = 'UPDATE_DATE_OF_PASSING_CIRCLE_COLOR';

export function updateFirstName(firstName) {
	return {
		type: UPDATE_FIRST_NAME,
		payload: { firstName }
	}
}

export function updateFirstNameLineColor(color) {
	return {
		type: UPDATE_FIRST_NAME_LINE_COLOR,
		payload: { color }
	}
}

export function updateFirstNameCircleColor(color) {
	return {
		type: UPDATE_FIRST_NAME_CIRCLE_COLOR,
		payload: { color }
	}
}

export function updateLastName(lastName) {
	return {
		type: UPDATE_LAST_NAME,
		payload: { lastName }
	}
}

export function updateLastNameLineColor(color) {
	return {
		type: UPDATE_LAST_NAME_LINE_COLOR,
		payload: { color }
	}
}

export function updateLastNameCircleColor(color) {
	return {
		type: UPDATE_LAST_NAME_CIRCLE_COLOR,
		payload: { color }
	}
}

export function updateDateOfBirth(dateOfBirth) {
	return {
		type: UPDATE_DATE_OF_BIRTH,
		payload: { dateOfBirth }
	}
}

export function updateDateOfBirthLineColor(color) {
	return {
		type: UPDATE_DATE_OF_BIRTH_LINE_COLOR,
		payload: { color }
	}
}

export function updateDateOfBirthCircleColor(color) {
	return {
		type: UPDATE_DATE_OF_BIRTH_CIRCLE_COLOR,
		payload: { color }
	}
}

export function updateDateOfPassing(dateOfPassing) {
	return {
		type: UPDATE_DATE_OF_PASSING,
		payload: { dateOfPassing }
	}
}

export function updateDateOfPassingLineColor(color) {
	return {
		type: UPDATE_DATE_OF_PASSING_LINE_COLOR,
		payload: { color }
	}
}

export function updateDateOfPassingCircleColor(color) {
	return {
		type: UPDATE_DATE_OF_PASSING_CIRCLE_COLOR,
		payload: { color }
	}
}