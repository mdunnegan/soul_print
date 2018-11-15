export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH';
export const UPDATE_DATE_OF_PASSING = 'UPDATE_DATE_OF_PASSING';

export function updateFirstName(firstName) {
	return {
		type: UPDATE_FIRST_NAME,
		payload: { firstName }
	}
}

export function updateLastName(lastName) {
	return {
		type: UPDATE_LAST_NAME,
		payload: { lastName }
	}
}

export function updateDateOfBirth(dateOfBirth) {
	return {
		type: UPDATE_DATE_OF_BIRTH,
		payload: { dateOfBirth }
	}
}

export function updateDateOfPassing(dateOfPassing) {
	return {
		type: UPDATE_DATE_OF_PASSING,
		payload: { dateOfPassing }
	}
}