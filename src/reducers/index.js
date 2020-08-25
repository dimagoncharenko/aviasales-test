const initialState = {
	tickets: [],
	error: false,
	loading: true,
	filter: {
		all: true,
		noStops: true,
		oneStops: true,
		twoStops: true,
		threeStops: true
	}
};

const setFilterAllValue =(filter) => {
	let needValue;
	for (const [key, value] of Object.entries(filter)) {
		if (key === 'all') continue;
		if (value) {
			needValue = true;
		} else {
			needValue = false;
			break;
		}
	}
	return needValue;
}


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

		case 'FILTER_BY_STOPS':
			let filter = {};
			if (action.payload === 'all') {
				if (state.filter.all) {
					for (const key of Object.keys(state.filter)) {
						filter[key] = false;
					}
				} else {
					for (const key of Object.keys(state.filter)) {
						filter[key] = true;
					}
				}
			} else {
				filter = {
					...state.filter,
					[action.payload]: !state.filter[action.payload]
				}
			}

			filter.all = setFilterAllValue(filter);

			return {
				...state,
				filter
			}


		default:
			return state
	}
};

export default reducer;