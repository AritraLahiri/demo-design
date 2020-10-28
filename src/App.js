import './App.css';
import React from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Services from './Services/Services';
import Offer from './Offer/Offer';
import Community from './Community/Community';
import Featured from './Featured/Featured';
import About from './About/About';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Header />
			<Services />
			<Offer />
			<Community />
			<Featured />
			<About />
		</React.Fragment>
	);
}

export default App;
