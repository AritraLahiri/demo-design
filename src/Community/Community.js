import React from 'react';
import './Community.css';
import commSVG from '../assets/comm.svg';

const Community = () => {
	return (
		<section className="comm">
			<div className="comm-head">
				<h1 className="comm-title">BECOME A PART OF OUR KICKASS COMMUNITY</h1>
				<h5 className="comm-sub-title">
					We can’t do this alone, so we need each other, especially you. Join our community and get started on
					your investing journey!
				</h5>
				<button className="cmm-btn">start your journey</button>
				<img id="svg" src={commSVG} alt="svg" />
			</div>
		</section>
	);
};

export default Community;
