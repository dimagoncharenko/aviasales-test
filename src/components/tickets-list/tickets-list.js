import React from 'react';
import {  useSelector } from 'react-redux'

import TicketCard from '../ticket-card/';
import './tickets-list.css';
import Spinner from '../spinner';

const TicketsList = () => {
	const TICKET_COUNT = 5;
	const {tickets, loading} = useSelector(state => state);

	if (loading) {
		return <Spinner />
	}

	return (
		<ul className="tickets-list">
			{
				tickets.map((ticket, idx) => {
					if (idx < TICKET_COUNT) {
						console.log(ticket)
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