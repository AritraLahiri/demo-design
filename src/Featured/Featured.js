import React from 'react';
import styles from './Feature.module.css';
import featurePic from '../assets/feature.jpg';
const Featured = () => {
	return (
		<section className={styles.feature}>
			<h1 className={styles.featuretitle}>
				<span className={styles.featurespan}>Featured</span> in:
			</h1>
			<div className={styles.parent}>
				<div className={styles.feat}>
					<img src={featurePic} alt="feature" />
				</div>
				<div className={styles.feat}>
					<img src={featurePic} alt="feature" />
				</div>
				<div className={styles.feat}>
					<img src={featurePic} alt="feature" />
				</div>
				<div className={styles.feat}>
					<img src={featurePic} alt="feature" />
				</div>
				<div className={styles.feat}>
					<img src={featurePic} alt="feature" />
				</div>
				<div className={styles.feat}>
					<img src={featurePic} alt="feature" />
				</div>
			</div>
		</section>
	);
};

export default Featured;
