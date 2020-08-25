import React from 'react';
import { useSelector } from 'react-redux'

import TicketCard from '../ticket-card/';
import './tickets-list.css';
import Spinner from '../spinner';
import { transfromStops } from '../../utils';

const TicketsList = () => {
	const TICKET_COUNT = 5;
	const { tickets, loading, filter } = useSelector(state => state);
	const visibleItems = tickets.filter((ticket) => {
		let { stops } = ticket.segments[0];
		stops = transfromStops(stops.length);
		return filter[stops]
	});

	if (loading) {
		return <Spinner />
	}

	return (
		<ul className="tickets-list">
			{
				visibleItems.map((ticket, idx) => {
					if (idx < TICKET_COUNT) {
						return <li key={idx}> <TicketCard ticketData={ticket} /> </li>
					} else {
						return false
					}
				})
			}
		</ul>
	)
};

export default TicketsList;