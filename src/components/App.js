import React from 'react';

import Intro from './Intro';
import AboutMeSection from './AboutMeSection';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';


function App() {

	let navigation_names = [
		['About Me', 'about_me'],
		['Skills', 'skills'],
		['Portfolio', 'portfolio'],
		['Contact Me', 'contact_me'],
		['View CV','view_cv']
	];

	return (
		<div className='main_wrapper'>
			<Intro navigation={navigation_names} />
			<AboutMeSection />
			<Skills />
			<Portfolio />
			<Footer navigation={navigation_names} />
		</div>
	);
}

export default App;


