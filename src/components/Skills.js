import React from 'react';

import html from "../images/html.webp";
import css from "../images/css.webp";
import js from "../images/js.webp";
import photoshop from "../images/photoshop.webp";
import git from "../images/git.webp";
import react from "../images/react.webp";
import python from "../images/python.webp";
import babel from "../images/babel.webp";
import jquery from "../images/jquery.webp";
import sass from "../images/sass.webp";

import '../styles/skills.css';

function Skills(props) {
	return (
		<section className='skills' id="skills">
			<h2 className='my_skills_title'>My skills</h2>
			<ul className="skills_list">
				<li className="skills_list_item" id="html">
					<h6>HTML5</h6>
					<picture>
						<source srcSet={html} type='image/webp' />
						<img srcSet={html} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="css">
					<h6>CSS3</h6>
					<picture>
						<source srcSet={css} type='image/webp' />
						<img srcSet={css} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="js">
					<h6>JavaScript</h6>
					<picture>
						<source srcSet={js} type='image/webp' />
						<img srcSet={js} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="jquery">
					<h6>jQuery</h6>
					<picture>
						<source srcSet={jquery} type='image/webp' />
						<img srcSet={jquery} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="react">
					<h6>React</h6>
					<picture>
						<source srcSet={react} type='image/webp' />
						<img srcSet={react} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="babel">
					<h6>Babel</h6>
					<picture>
						<source srcSet={babel} type='image/webp' />
						<img srcSet={babel} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="sass">
					<h6>SASS</h6>
					<picture>
						<source srcSet={sass} type='image/webp' />
						<img srcSet={sass} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="python">
					<h6>Python3</h6>
					<picture>
						<source srcSet={python} type='image/webp' />
						<img srcSet={python} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="git">
					<h6>GIT</h6>
					<picture>
						<source srcSet={git} type='image/webp' />
						<img srcSet={git} alt="" className="skill_image" />
					</picture>
				</li>
				<li className="skills_list_item" id="photoshop">
					<h6>Photoshop</h6>
					<picture>
						<source srcSet={photoshop} type='image/webp' />
						<img srcSet={photoshop} alt="" className="skill_image" />
					</picture>
				</li>
			</ul>
		</section>
	)
}

export default Skills;