import React from 'react';
import { convertDate, convertMinutes, addMinutes } from '../../utils'

import './ticket-card.css';

const TicketCard = ({ ticketData }) => {
	const { price, segments } = ticketData;

	const renderSegment = (segment, idx) => {
		const { date, destination, duration, origin, stops } = segment;
		const time = convertDate(date);
		const arrivalTime = convertDate(addMinutes(date, duration));
		return (
			<div key={idx} className="ticket-card__row">
				<div className="ticket-card__column">
					<div className="ticket-card__info">{origin} – {destination}</div>
					<div className="ticket-card__value">{time} – {arrivalTime}</div>
				</div>
				<div className="ticket-card__column">
					<div className="ticket-card__info">В пути</div>
					<div className="ticket-card__value">{convertMinutes(duration)}</div>
				</div>
				<div className="ticket-card__column">
					<div className="ticket-card__info">{stops.length} пересадки</div>
					<div className="ticket-card__value">{stops.join(', ')}</div>
				</div>
			</div>
		)
	}

	return (
		<div className="ticket-card">
			<div className="ticket-card__head">
				<div className="ticket-card__price">{price.toLocaleString()} Р</div>
				<div className="ticket-card__logo"></div>
			</div>
			<div className="ticket-card__body">
				{segments.map(renderSegment)}
			</div>
		</div>
	)
};

export default TicketCard;