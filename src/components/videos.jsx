import React, { Component } from 'react';

export default class Videos extends Component {
	state = {
		json: [],
	};

	componentDidMount() {
		fetch(`${process.env.PUBLIC_URL}/config/videos.json`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					json,
				})
			);
	}

	render() {
		return (
			<main className='videos'>
				{this.state.json.map((obj, i) => {
					return (
						<iframe
							key={i}
							title={obj.name}
							src={`https://www.youtube-nocookie.com/embed/${obj.hash}?theme=dark&color=white`}
							rel='0'
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope;'
							allowFullScreen='1'
						/>
					);
				})}
			</main>
		);
	}
}
