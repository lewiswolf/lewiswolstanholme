import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const browserTruthTable = {
	Chrome: !!window.chrome,
	Firefox: typeof InstallTrigger !== 'undefined',
}

export default class Head extends Component {
	state = {
		darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches || false,
	}

	componentDidMount() {
		if (browserTruthTable.Chrome || browserTruthTable.Firefox) {
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
				this.setState({
					darkMode: e.matches,
				})
			})
		}
	}

	render() {
		return (
			<Helmet>
				<title>{this.props.title}</title>
				<meta charset='utf-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content={this.props.themeColor} />
				<meta name='description' content={this.props.description} />
				<link rel='manifest' href={`${process.env.PUBLIC_URL}/manifest.json`} />
				<link rel='apple-touch-icon' href={`${process.env.PUBLIC_URL}/images/favicon192.png`} />
				<link rel='icon' href={`${process.env.PUBLIC_URL}/favicon${this.state.darkMode ? '-dark' : ''}.ico`} />
				{/* {Global site tag (gtag.js) - Google Analytics} */}
				<script async src={`https://www.googletagmanager.com/gtag/js?id=${this.props.gtag}`}></script>
			</Helmet>
		)
	}
}
