const initialState = {
	tickets: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TICKETS_REQUEST':
			return {
				tickets: []
			}

		case 'FETCH_TICKETS_SUCCESS':
			return {
				tickets: action.payload
			}
		
			default:
				return state
	}
};

export default reducer;