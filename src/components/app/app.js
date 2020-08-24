import React, { useEffect, useContext } from 'react';
import TicketsList from '../tickets-list';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../../actions';
import AviaServiceContext from '../avia-service-context';
import Sorting from '../sorting';
import ErrorIndicator from '../error-indicator';

import './app.css';

const App = () => {
	const context = useContext(AviaServiceContext);
	const dispatch = useDispatch();
	const isError = useSelector(({error}) => error);

	useEffect(() => {
		fetchTickets(context, dispatch);
	}, [context, dispatch]);

	if (isError) {
		return <ErrorIndicator />
	}

	return (
		<div className="app">
			<div className="container">
				<div className="app__row">
					<div className="app__sidebar">
						Sidebar
					</div>
					<div className="app__body">
						<Sorting />
						<TicketsList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;