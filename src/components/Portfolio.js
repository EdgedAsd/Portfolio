import React from 'react';

import PortfolioSlider from './PortfolioSlider';

import '../styles/portfolio.css';

function Portfolio(props) {
	return (
		<section className='portfolio' id="portfolio">
			<h2 className='portfolio_title'>Portfolio</h2>
			<PortfolioSlider sites={props.sites} />
		</section>
	)
}

export default Portfolio;