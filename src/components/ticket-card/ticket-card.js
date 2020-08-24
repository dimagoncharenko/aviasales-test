import React from 'react';

import './ticket-card.css';

const TicketCard = ({ ticketData }) => {
	const { price, segments } = ticketData;

	const convertDate = (dateString) => {
		const date = new Date(dateString);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
	}

	const convertMinutes = (num) => {
		const hours = Math.floor(num / 60);
		const minutes = num % 60;
		return `${hours}ч ${minutes}м`;
	}

	const addMinutes = (leaveTime, duration) => {
		const data = new Date(leaveTime);
		return new Date(data.getTime() + duration * 60000);
	}

	return (
		<div className="ticket-card">
			<div className="ticket-card__head">
				<div className="ticket-card__price">{price.toLocaleString()} Р</div>
				<div className="ticket-card__logo"></div>
			</div>
			<div className="ticket-card__body">
				{
					segments.map((segment, idx) => {
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
					})
				}
			</div>
		</div>
	)
};

export default TicketCard;