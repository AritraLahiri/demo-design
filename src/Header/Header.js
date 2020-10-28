import React from 'react';
import headerPic from '../assets/header.png';
import applePic from '../assets/apple.png';
import './Header.css';
const Header = () => {
	return (
		<React.Fragment>
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
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#615B5B"
					fillOpacity="0.2"
					d="M0,0L26.7,26.7C53.3,53,107,107,160,138.7C213.3,171,267,181,320,197.3C373.3,213,427,235,480,208C533.3,181,587,107,640,74.7C693.3,43,747,53,800,64C853.3,75,907,85,960,122.7C1013.3,160,1067,224,1120,240C1173.3,256,1227,224,1280,192C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
				/>
			</svg>
		</React.Fragment>
	);
};

export default Header;
