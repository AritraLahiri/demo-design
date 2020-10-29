import React from 'react';
import styles from './Offer.module.css';
import money from '../assets/money.png';
import support from '../assets/supp.png';
import comm from '../assets/comm.png';
import share from '../assets/share.png';
import learn from '../assets/learn.png';
import port from '../assets/port.png';
import centerPic from '../assets/offer-img.png';

const Offer = () => {
	return (
		<section className={styles.offers} id="offer">
			<div className={styles.offerhead}>
				<h1>
					what does <span className={styles.comnamespan}>alinea</span> offer ?
				</h1>
			</div>
			<div className={styles.parent}>
				<div className={styles.sec}>
					<div className={styles.offerimg}>
						<img alt="portfolio" src={port} />
					</div>
					<div className={styles.offerinfo}>
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className={styles.sec2}>
					<img alt="img" src={centerPic} />
				</div>
				<div className={styles.sec}>
					<div className={styles.offerimg}>
						<img alt="share" src={share} />
					</div>
					<div className={styles.offerinfo}>
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className={styles.sec}>
					<div className={styles.offerimg}>
						<img alt="community" src={comm} />
					</div>
					<div className={styles.offerinfo}>
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className={styles.sec}>
					<div className={styles.offerimg}>
						<img alt="support" src={support} />
					</div>
					<div className={styles.offerinfo}>
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className={styles.sec}>
					<div className={styles.offerimg}>
						<img alt="money" src={money} />
					</div>
					<div className={styles.offerinfo}>
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
				<div className={styles.sec}>
					<div className={styles.offerimg}>
						{' '}
						<img alt="learn-icon" src={learn} />
					</div>
					<div className={styles.offerinfo}>
						<h2>Custom Portfolio</h2>
						<h3>pre-packaged portfolio for you</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offer;
