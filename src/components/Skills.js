import React from 'react';

import '../styles/skills.css';

function Skills(props) {
	return (
		<section className='skills' id="skills">
			<h2 className='my_skills_title'>My skills</h2>
			<ul className="skills_list">
				<li className="skills_list_item" id="html">
					<h6>HTML5</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="css">
					<h6>CSS3</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="js">
					<h6>JavaScript</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="jquery">
					<h6>jQuery</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="react">
					<h6>React</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="babel">
					<h6>Babel</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="sass">
					<h6>SASS</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="python">
					<h6>Python3</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="git">
					<h6>GIT</h6>
					<div className="skill_image"></div>
				</li>
				<li className="skills_list_item" id="photoshop">
					<h6>Photoshop</h6>
					<div className="skill_image"></div>
				</li>
			</ul>
		</section>
	)
}

export default Skills;