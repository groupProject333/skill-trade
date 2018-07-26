import React, { Component } from 'react';
import PageSelect from '../Header/PageSelect';
import API from '../utils/API';

class Browse extends Component {
	state = {
		listings: [],
		title: '',
		description: '',
		duration: '',
		datesAvailable: '',
		tags: ''
	};

	componentDidMount() {
		this.loadListings();
	}

	loadListings = () => {
		API.getListings()
			.then((res) =>
				this.setState({
					listings: res.data,
					title: '',
					description: '',
					duration: '',
					datesAvailable: '',
					tags: ''
				})
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<p>Browse Lessons</p>
				<PageSelect />
			</div>
		);
	}
}

export default Browse;
