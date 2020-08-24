const initialState = {
	tickets: [],
	error: false,
	loading: true,
	filtering: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TICKETS_REQUEST':
			return {
				...state,
				tickets: [],
				loading: true,
				error: false
			}

		case 'FETCH_TICKETS_SUCCESS':
			return {
				...state,
				tickets: action.payload,
				loading: false,
				error: false
			}

		case 'FETCH_TICKETS_FAILURE':
			return {
				...state,
				tickets: [],
				loading: false,
				error: true
			}

		case 'SORT_BY_CHEAPEST':
			return {
				...state,
				tickets: state.tickets.slice().sort((a, b) => a.price - b.price),
			}

		case 'SORT_BY_FASTEST':
			const fastestTickets = state.tickets.slice().sort((a, b) => {
				return a.segments[0].duration - b.segments[0].duration
			});

			return {
				...state,
				tickets: fastestTickets,
			}
		
			default:
				return state
	}
};

export default reducer;