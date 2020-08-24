const ticketsRequested = () => {
	return {
		type: 'FETCH_TICKETS_REQUEST'
	};
};

const ticketsLoaded = (newTickets) => {
	return {
		type: 'FETCH_TICKETS_SUCCESS',
		payload: newTickets
	}
};

const ticketsError = (error) => {
	return {
		type: 'FETCH_TICKETS_FAILURE',
		payload: error
	}
};

const fetchTickets = (service, dispatch) => {
	ticketsRequested();
	service
		.getTicket()
		.then(res => res.json())
		.then(({tickets}) => dispatch(ticketsLoaded(tickets)))
		.catch(err => dispatch(ticketsError(err)))
}

export { fetchTickets }