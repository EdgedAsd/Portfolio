import React from 'react';

import '../styles/footer.css';

function Footer(props) {

	let navigation_items = props.navigation.map((item) => <li key={item[0]} className="footer_navigation_item"><a className="footer_navigation_link" href={`#${item[1]}`}>{item[0]}</a></li>)

	return (
		<footer className='main_footer'>
			<ul className="footer_list">
				<li className='footer_list_item ps_item' id="view_cv">
					<h6 className="footer_list_title">P.&nbsp;S.</h6>
					<p className="ps_text">Thanks for your attention!<br />
					I'm sure you will decide correctly to choose me as an employee. 
					But if there is no, I'm glad that you checked my portfolio, maybe we will work together sooner.
					Please, write into my email what didn't you like. It will help me to become better.</p>
					<a href="cv.pdf" className="link_to_cv" download>View CV</a>
				</li>
				<li className='footer_list_item navigation_item'>
					<h6 className="footer_list_title">Navigation</h6>
					<ul className="footer_navigation">
						{navigation_items}
					</ul>
				</li>
				<li className='footer_list_item contact_item' id="contact_me">
					<h6 className="footer_list_title">Contact Me</h6>
					<ul className="footer_contacts">
						<li className="footer_contacts_item"><i className="fa fa-compass" aria-hidden="true"></i><p>Based in Moscow</p></li>
						<li className="footer_contacts_item"><i className="fa fa-envelope" aria-hidden="true"></i><p>vladimir_frontend@mail.ru</p></li>
						<li className="footer_contacts_item"><i className="fa fa-phone" aria-hidden="true"></i><p>+7&nbsp;(963)-767-60-45</p></li>
					</ul>
				</li>
			</ul>
		</footer>
	)
}

export default Footer;