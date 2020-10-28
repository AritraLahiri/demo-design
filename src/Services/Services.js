import React from 'react';
import investPic from '../assets/invest.png';
import './Services.css';

const Services = () => {
	return (
		<section className="services" id="service">
			<h1 className="services-head">
				<span className="service-span">Investing</span> is overwhelming,
			</h1>
			<h1 className="services-head">
				but it <span className="service-d-span">doesn’t </span> have to be.
			</h1>
			<div className="parent">
				<div className="section-1">
					<h1>Responsible Investing</h1>
					<h3>Make your money moves matter ! Express your values and interest through your investments</h3>
					<img alt="service-invest" src={investPic} width="655px" height="725px" />
				</div>
				<div className="section-2">
					<div className="service-img">
						<h1 className="section-title">Community</h1>
						<h3 className="section-body">
							We all need someone to lean on and investing is no different. As part of our community, you
							get the support to embark and continue on your journey.
						</h3>
					</div>
				</div>
				<div className="section-3">
					<div className="service-img-2">
						<h1 className="section-title">Learning</h1>
						<h3 className="section-body">
							We eliminate the unecessary financial jargon.Learn as you go with our interactive mini
							capsule and before you know it , you will be confident investor.
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
