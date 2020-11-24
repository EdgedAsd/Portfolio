import React from 'react';

import '../styles/about_me.css';

function AboutMeSection(props) {
	return (
		<section className='about_me' id="about_me">
			<ul className='about_me_list'>
				<li>
					<h2>My story<hr /></h2>
					<p>I started getting interested in frontend development since higher school. 
					And I'm still becoming better and better. 
					Every day I'm practicing writing code, create flexible and pixel-perfect pages, make complicated animations.
					Now I'm sure you'll appreciate <a href="#portfolio" className="link_to_portfolio">my&nbsp;work.</a></p>
				</li>
				<li className='second_paragraph'>
					<h2>Education<hr /></h2>
					<p>It's the smallest part of my life. 
					Unfortunately, after studying for a year, 
					I understood that the university couldn't help me to get the knowledge I required. 
					Therefore, I decided to study by myself. I have read several textbooks and manuals about HTML, CSS, JS, React. 
					But besides theory only, the most important part of my education was a regular practice. 
					I feel sure this way to study gave me an advantage because I've got a lot of experience while studying.</p>
				</li>
				<li>
					<h2>Experience<hr /></h2>
					<p>Besides my training websites, I have been taking part in the Eurobot competition. 
					You'd think this isn't related in any way with frontend development, 
					but I designed the web GUI with which my team and I could easily manage our robot. 
					I'm still supporting this project for one year. </p>
					<p>It is worth mentioning that I completed several orders on freelance. You can find them in <a href="#portfolio" className="link_to_portfolio">my&nbsp;portfolio.</a></p>
				</li>
				<li className='second_paragraph'>
					<h2>Hobbies<hr /></h2>
					<p>Despite my love for frontend development, I'm also fond of music. Not only listening but singing or playing the guitar. 
					It helps me to relax. Furthermore, I like playing chess. It's one of the most important hobbies because it improves my brain skills. 
					Also, I love sports. Any kind of it. I'm sure everybody needs to spend his time on a sport for his health.</p>
				</li>
			</ul>
		</section>
	)
}

export default AboutMeSection;