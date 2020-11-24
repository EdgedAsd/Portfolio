import React from 'react';

import NavigationItem from './NavigationItem';

import '../styles/header.css';

function Intro(props) {

	let navigation_items = props.navigation.map((item) => <li key={item[0]}><NavigationItem name={item[0]} link={item[1]} /></li>)

	return (
		<header className='main_header'>
			<div className="header_content">
				<div className='own_photo'>
					<div className="dark_wall"></div>
				</div>
				<div className='intro_about_me'>
					<nav className='navigation'>
						<ul className='navigation_list'>
							{navigation_items}
						</ul>
					</nav>
					<hr className="navigation_line"/>
					<div className='header_text'>
						<h1>Hi, I'm Vladimir.<br />
						Enthusiast in love <br/> with his profession</h1>

						<p className='header_description'>These are not just pretty words. 
						Three years ago, I created my first website. <br/>
						It was simple, non-adaptive, but it was the website that opened up the wonderful world of the frontend development for me. <br />
						This world beckons me so far.</p>

						<div className="header_images">
							<div className="image_vertical header_image">
								<div className="dark_wall"></div>
							</div>
							<div className="image_horizontal header_image"></div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Intro;