import React from 'react';

import '../styles/portfolio_btn.css';

class PortfolioBtn extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			color: '#1a1b1f'
		}

		this.changeColorToHover = this.changeColorToHover.bind(this);
		this.changeColorToDefault = this.changeColorToDefault.bind(this);
	}

	changeColorToHover() {
		this.setState({
			color: "#35373f"
		})
	}

	changeColorToDefault() {
		this.setState({
			color: "#1a1b1f"
		})
	}

	render() {
		let arrow = (this.props.side == 'right') ? <i className="fa fa-chevron-right" aria-hidden="true"></i> : <i className="fa fa-chevron-left" aria-hidden="true"></i>

		return (
			<button 
				onClick={this.props.click} 
				className={`${this.props.side}_portfolio_btn portfolio_btn`} 
				style={{"color":this.state.color}} 
				onMouseOver={this.changeColorToHover}
				onMouseOut={this.changeColorToDefault}
			>{arrow}</button>
		)
	}
	
}

export default PortfolioBtn;