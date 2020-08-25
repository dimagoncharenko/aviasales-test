import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortByCheapest, sortByFastest } from '../../actions';

import './sorting.css';

const Sorting = () => {
	const dispatch = useDispatch()
	const { fastest, cheapest } = useSelector(state => state.sorting);

	return (
		<div className="sorting">
			<button
				className={cheapest ? "active" : ""}
				onClick={() => dispatch(sortByCheapest())}>
				Самый дешевый
			</button>
			<button
				className={fastest ? "active" : ""}
				onClick={() => dispatch(sortByFastest())}>
				Самый быстрый
			</button>
		</div>
	);
};

export default Sorting;