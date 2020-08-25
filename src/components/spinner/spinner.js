import React from 'react';

import spinnerSvg from './assets/spinner.svg'
import './spinner.css';

const Spinner = () => {
	return (
		<div className="spinner">
			<img src={spinnerSvg} alt=""/>
		</div>
	)
};

export default Spinner;