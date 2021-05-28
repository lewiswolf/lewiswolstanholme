import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Head extends Component {
	static defaultProps = {
		darkModeFavicon: false,
		gtag: '',
		children: null,
	}

	constructor(props) {
		super(props)
		this.state = {
			title: '',
			description: '',
			themeColor: '',
			appleIcon: '',
		}
	}

	componentDidMount() {
		// fetch manifest.json
		fetch(`${process.env.PUBLIC_URL}/manifest.json`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					title: json.name || '',
					description: json.description || '',
					themeColor: json.theme_color || '',
					appleIcon: json.icons[1].src || '',
				})
			})
	}

	render() {
		return (
			<Helmet>
				<title>{this.state.title}</title>
				<meta charset='utf-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content={this.state.themeColor} />
				<meta name='description' content={this.state.description} />
				<link rel='manifest' href={`${process.env.PUBLIC_URL}/manifest.json`} />
				<link rel='apple-touch-icon' href={`${process.env.PUBLIC_URL}/${this.state.appleIcon}`} />
				<link
					rel='icon'
					{...(this.props.darkModeFavicon && {
						media: '(prefers-color-scheme: light)',
					})}
					href={`${process.env.PUBLIC_URL}/favicon.ico`}
				/>
				{this.props.darkModeFavicon && (
					<link
						rel='icon'
						media='(prefers-color-scheme: dark)'
						href={`${process.env.PUBLIC_URL}/favicon-dark.ico`}
					/>
				)}
				{this.props.gtag && (
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${this.props.gtag}`}></script>
				)}
				{this.props.children && this.props.children()}
			</Helmet>
		)
	}
}
