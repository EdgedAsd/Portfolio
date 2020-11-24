import React from 'react';

import '../styles/navigation_item.css';

function NavigationItem(props) {
	return (
		<a href={`#${props.link}`} className='navigation_item'>{props.name}</a>
	)
}

export default NavigationItem;