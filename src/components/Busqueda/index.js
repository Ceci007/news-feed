import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Busqueda extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchParams: '',
		};
	}

	setSearchParams = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};

	handleSearch = event => {
		if (event.charCode === 13 && this.state.searchParams) {
			this.props.history.push({
				pathname: '/search',
				searchParams: this.state.searchParams,
			});
		}
	};

	render() {
		return (
			<div className='container'>
				<input
					className='text__input'
					type='search'
					name='searchParams'
					placeholder='Ingresa un texto'
					onKeyUp={this.setSearchParams}
					onKeyPress={e => this.handleSearch(e)}
				/>
			</div>
		);
	}
}

export default withRouter(Busqueda);
