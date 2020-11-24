import React from 'react';

import '../styles/portfolio_item.css';

function PortFolioItem(props) {

	return (
		<li className='portfolio_item' id={'item_'+props.id} style={{'opacity': String(props.opacity)}}>
			<div className="portfolio_item_image" style={{'backgroundImage': `url(${props.background})`, 'backgroundSize': 'cover'}}></div>
			<a href={props.href} className='site_link' target="_blank" rel="noopener noreferrer">
				<h4 className='site_name'>{props.name}</h4>
			</a>
			<a href={props.github} className="link_to_git" target="_blank" rel="noopener noreferrer">View on gitHub</a>
		</li>
	)
}

export default PortFolioItem;