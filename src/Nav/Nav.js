import React from 'react';
import './Nav.css';
const Nav = () => {
	return (
		<header className="nav">
			<div className="nav-brand">
				<a href="/" className="brand">
					Alinea Invest
				</a>
			</div>
			<nav className="nav-head">
				<div className="nav-item">
					<a href="#service">Services</a>
				</div>
				<div className="nav-item">
					<a href="#about">About</a>
				</div>
				<div className="nav-item">
					<a href="#offer">Offers</a>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
