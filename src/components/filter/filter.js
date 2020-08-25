import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByStops } from '../../actions';

import './filter.css';

const Filter = () => {
	const dispatch = useDispatch();
	const filter  = useSelector(state => state.filter)

	const onFilterChange = (value) => {
		dispatch(filterByStops(value))
	}

	const checkboxes = [
		{ name: 'Все', value: 'all' },
		{ name: 'Без пересадок', value: 'noStops' },
		{ name: '1 пересадка', value: 'oneStops' },
		{ name: '2 пересадки', value: 'twoStops' },
		{ name: '3 пересадки', value: 'threeStops' },
	]

	return (
		<div className="filter">
			<div className="filter__title">Количество пересадок</div>
			{
				checkboxes.map(({ name, value }) => {
					return (
						<label key={value} className="checkbox">
							<input
								type="checkbox"
								value={value}
								onChange={() => onFilterChange(value)}
								checked={filter[value]} />
							<span className="checkbox__label">{name}</span>
						</label>
					)
				})
			}
		</div>
	)
};

export default Filter;