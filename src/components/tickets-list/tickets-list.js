import React from 'react';
import {  useSelector } from 'react-redux'

import TicketCard from '../ticket-card/';
import './tickets-list.css';

const TicketsList = () => {
	const TICKET_COUNT = 5;
	const tickets = useSelector(state => state.tickets);

	return (
		<ul className="tickets-list">
			{
				tickets.map((ticket, idx) => {
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