import React from 'react';

import PortfolioItem from './PortfolioItem';
import PortfolioBtn from './PortfolioBtn';

import sites from '../sites.js';

import '../styles/portfolio_slider.css';

class PortfolioSlider extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			blockslide: false,
			sites: sites,
			opacity: 1
		}

		this.rollSitesLeft = this.rollSitesLeft.bind(this);
		this.rollSitesRight = this.rollSitesRight.bind(this);
		this.clickRight = this.clickRight.bind(this);
		this.clickLeft = this.clickLeft.bind(this);

		this.DELAY = 1000;
	}

	componentDidMount() {
		(async () => {
			let sites_with_bg = [];
			for (let item in this.state.sites) {
				let image_src = await import(`../${sites[item].image}`).then((result) => result.default);
				let new_site = this.state.sites[item];
				new_site['background'] = image_src;
				sites_with_bg.push(new_site);
			}

			this.setState({
				sites: sites_with_bg
			});
		})();
	}

	rollSitesLeft() {
		this.setState((prevState) => {
			for (let site = 0; site < prevState.sites.length-1; site++) {
				let buffer = prevState.sites[site];
				prevState.sites[site] = prevState.sites[site+1];
				prevState.sites[site+1] = buffer;
			}

			return {
				sites: prevState.sites
			}
		})
	}

	clickLeft() {
		if (!this.state.blockslide) {
			let slide_timer = setTimeout(() => this.setState({blockslide:false}), this.DELAY);
			let change_image_timer = setTimeout(this.rollSitesLeft, this.DELAY/3);
			let opacity_delay = setTimeout(() => this.setState({opacity: 1}), this.DELAY/2);

			this.setState({
				opacity: 0,
				blockslide: true
			})
		}
	}

	rollSitesRight() {
		this.setState((prevState) => {
			for (let site = prevState.sites.length-1; site >= 1; site--) {
				let buffer = prevState.sites[site];
				prevState.sites[site] = prevState.sites[site-1];
				prevState.sites[site-1] = buffer;
			}

			return {
				sites: prevState.sites
			}
		})
	}

	clickRight() {
		if (!this.state.blockslide) {
			let slide_timer = setTimeout(() => this.setState({blockslide:false}), this.DELAY);
			let change_image_timer = setTimeout(this.rollSitesRight, this.DELAY/3);
			let opacity_delay = setTimeout(() => this.setState({opacity: 1}), this.DELAY/2);

			this.setState({
				opacity: 0,
				blockslide: true
			})
		}
	}

	render() {
		let sites = this.state.sites.slice(0,3);

		return (
			<div className='portfolio_btn_wrapper'>
				<PortfolioBtn side='left' click={this.clickLeft}/>
				<ul className='portfolio_list'>
					{sites.map((item) => 
						<PortfolioItem 
							key={item.id}
							id={item.id}
							name={item.name}
							background={item.background}
							opacity={this.state.opacity}
							href={item.link}
							github={item.github}
						/>
					)}
				</ul>
				<PortfolioBtn side='right' click={this.clickRight}/>
				<a href="" className="link_portfolio_git">View this page on gitHub</a>
			</div>
		)
	}
}

export default PortfolioSlider;