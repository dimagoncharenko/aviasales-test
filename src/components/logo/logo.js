import React from 'react';
import logoImg from './assets/logo.svg';
import './logo.css';

const Logo = () => {
	return (
		<div className="logo">
			<img src={logoImg} className="logo__img" alt="Aviasales"/>
		</div>
	)
};
export default Logo;