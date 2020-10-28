import React from 'react';
import './Offer.css';
import money from '../assets/money.png';
import support from '../assets/supp.png';
import comm from '../assets/comm.png';
import share from '../assets/share.png';
import learn from '../assets/learn.png';
import port from '../assets/port.png';
import centerPic from '../assets/offer-img.png';

const Offer = () => {
	return (
		<section className="offers" id="offer">
			<div className="offer-head">
				<h1>
					what does <span className="com-name-span">alinea</span> offer ?
				</h1>
			</div>
			<div className="parent">
				<div className="sec sec-1">
					<div className="offer-img">
						<img alt="portfolio" src={port} />
					</div>
					<div className="offer-info">
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className="sec-2">
					<img alt="img" src={centerPic} />
				</div>
				<div className="sec sec-3">
					<div className="offer-img">
						<img alt="share" src={share} />
					</div>
					<div className="offer-info">
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className="sec sec-4">
					<div className="offer-img">
						<img alt="community" src={comm} />
					</div>
					<div className="offer-info">
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className="sec sec-5">
					<div className="offer-img">
						<img alt="support" src={support} />
					</div>
					<div className="offer-info">
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className="sec sec-6">
					<div className="offer-img">
						<img alt="money" src={money} />
					</div>
					<div className="offer-info">
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className="sec sec-7">
					<div className="offer-img">
						<img alt="learn-icon" src={learn} />
					</div>
					<div className="offer-info">
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offer;
