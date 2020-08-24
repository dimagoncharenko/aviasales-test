import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByCheapest, sortByFastest } from '../../actions';


const Sorting = () => {
	const dispatch = useDispatch()
	
	return (
		<div className="sorting">
			<button className="sorting__btn" onClick={() => dispatch(sortByCheapest())}>Самый дешевый</button>
			<button className="sorting__btn" onClick={() => dispatch(sortByFastest())}>Самый быстрый</button>
		</div>
	);
};

export default Sorting;