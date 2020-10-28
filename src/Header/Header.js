import React from 'react';
import headerPic from '../assets/header.png';
import applePic from '../assets/apple.png';
import './Header.css';
const Header = () => {
	return (
		<main>
			<div className="head-left">
				<h1>Not Your Typical Investing App</h1>
				<h2>Invest with intention</h2>
				<p>Alinea makes responsible investing fun, easy, and social.</p>
				<button className="cta-btn">start your journey</button>
				<div className="news">
					<img width="50px" height="42px" src={applePic} alt="Apple" />
					<p>coming on app store</p>
				</div>
			</div>
			<div className="head-right">
				<div>
					<img src={headerPic} alt="Header" width="608px" height="691px" />
				</div>
			</div>
		</main>
	);
};

export default Header;
