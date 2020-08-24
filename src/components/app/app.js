import React, { useEffect, useContext } from 'react';
import TicketsList from '../tickets-list';
import { useDispatch } from 'react-redux'
import { fetchTickets } from '../../actions';
import AviaServiceContext from '../avia-service-context';

import './app.css';

const App = () => {
	const context = useContext(AviaServiceContext);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchTickets(context, dispatch);
	}, [context, dispatch]);

	return (
		<div className="app">
			<div className="container">
				<div className="app__row">
					<div className="app__sidebar">
						Sidebar
					</div>
					<div className="app__body">
						<TicketsList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;