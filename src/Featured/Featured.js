import React from 'react';
import './Feature.css';
import featurePic from '../assets/feature.jpg';
const Featured = () => {
	return (
		<section className="feature">
			<h1 className="feature-title">
				<span className="feature-span">Featured</span> in:
			</h1>
			<div className="parent">
				<div className="feat feat-1">
					<img src={featurePic} alt="feature" />
				</div>
				<div className="feat feat-2">
					<img src={featurePic} alt="feature" />
				</div>
				<div className="feat feat-3">
					<img src={featurePic} alt="feature" />
				</div>
				<div className="feat feat-4">
					<img src={featurePic} alt="feature" />
				</div>
				<div className="feat feat-5">
					<img src={featurePic} alt="feature" />
				</div>
				<div className="feat feat-6">
					<img src={featurePic} alt="feature" />
				</div>
			</div>
		</section>
	);
};

export default Featured;
