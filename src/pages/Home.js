import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from 'react-loading-skeleton';
import { withRouter } from 'react-router-dom';

import Card from '../components/Card';
import api from '../utils/api';
import './_home.scss';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			latestNews: [],
		};
	}

	async componentDidMount() {
		const latestNews = await api.latest();

		if (latestNews) {
			this.setState({
				latestNews: latestNews.slice(0, 10),
				isLoading: false,
			});
		}
	}

	async componentDidUpdate(prevProps) {
		if (
			prevProps.location !== this.props.location &&
			this.props.location.pathname === '/search'
		) {
			const searchResults = await api.busqueda(this.props.location.searchParams);
			if (searchResults) this.setState({ latestNews: searchResults });
		}
	}

	render() {
		const { isLoading, latestNews } = this.state;

		return (
			<div>
				<Grid
					container
					spacing={3}
					align='center'
					style={{ marginTop: '10px' }}
				>
					{isLoading &&
						Array.from({ length: 10 }, (_, index) => (
							<Grid item xs={12} lg={4} key={index}>
								<Skeleton width={282} height={337} />
							</Grid>
						))}

					{latestNews.length > 0 &&
						latestNews.map(latestNew => (
							<Grid item xs={12} lg={4} key={latestNew.news_id}>
								<Card data={latestNew} />
							</Grid>
						))}
				</Grid>
			</div>
		);
	}
}

export default withRouter(Home);
