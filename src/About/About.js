import React from 'react';
import styles from './about.module.css';
import facebook from '../assets/fb.png';
import pinterest from '../assets/pinterest.png';
import linkdin from '../assets/linkdin.png';
import twitter from '../assets/twitter.png';

const About = () => {
	return (
		<section className={styles.about} id="about">
			<div className={styles.subscribe}>
				<input placeholder="Email Address" />
				<button className={styles.btnsubscribe}>subscribe </button>
			</div>
			<div className={styles.parent}>
				<div className={styles.left}>
					<h5>
						footer logo Alinea Invest makes responsible investing fun, easy, and social with learning
						features.
					</h5>
					<div className={styles.social}>
						<div className={styles.img}>
							<a href="https://www.facebook.com">
								{' '}
								<img alt="social-media" src={facebook} />{' '}
							</a>
						</div>
						<div className={styles.img}>
							<a href="https://www.twitter.com">
								<img alt="social-media" src={twitter} />
							</a>
						</div>
						<div className={styles.img}>
							<a href="https://www.pinterest.com">
								<img alt="social-media" src={pinterest} />
							</a>
						</div>
						<div className={styles.img}>
							<a href="https://linkedin.com">
								<img alt="social-media" src={linkdin} />
							</a>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<h5>
						This website is for informational purposes only, and is not intended to serve as a
						recommendation to buy or sell any security in any account, and is not an offer or sale of a
						security. They are also not research reports and are not intended to serve as the basis for any
						investment decision. Any third-party information provided therein does not reflect the views of
						Alinea Invest, LLC. All investments involve risk and the past performance of a security or
						financial product does not guarantee future results or returns. Keep in mind that while
						diversification may help spread risk, it does not assure a profit or protect against loss. There
						is always the potential of losing money when you invest in securities or other financial
						products. Investors should consider their investment objectives and risks carefully before
						investing. The price of a given security may increase or decrease based on market conditions and
						customers may lose money, including their original investment. Alinea Invest, LLC is not a
						registered investment adviser or broker-dealer.
					</h5>
				</div>
			</div>
			<footer className={styles.footertext}>Copyright © 2020. All rights reserved by Alinea Invest</footer>
		</section>
	);
};

export default About;
