const initialState = {
	tickets: [],
	error: false,
	loading: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TICKETS_REQUEST':
			return {
				tickets: [],
				loading: true,
				error: false
			}

		case 'FETCH_TICKETS_SUCCESS':
			return {
				tickets: action.payload,
				loading: false,
				error: false
			}

		case 'FETCH_TICKETS_FAILURE':
			return {
				tickets: [],
				loading: false,
				error: true
			}
		
			default:
				return state
	}
};

export default reducer;