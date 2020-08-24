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

const fetchTickets = (service, dispatch) => {
	ticketsRequested();
	service
		.getTicket()
		.then(res => res.json())
		.then(({tickets}) => dispatch(ticketsLoaded(tickets)))
}

export { fetchTickets }