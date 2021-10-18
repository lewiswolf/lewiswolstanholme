// dependencies
import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
	children?: JSX.Element | null
	darkModeFavicon?: boolean
	gtag?: string
	title: string
}

interface State {
	appleIcon: string
	description: string
	themeColor: string
}

export default class Head extends React.Component<Props, State> {
	/*
	A react class used to render the <head> metatags. Uses the project's `manifest.json` to
	infer the description, theme colour and extended favicons. Adds support for a dark-mode 
	favicon.

	props:
		childern			- add extra elements to <head>
		darkModeFavicon		- use a darkmode favicon if supported?
		gtag				- ID for google analytics v4
		title				- title of the current web page
	*/

	static defaultProps = {
		children: null,
		darkModeFavicon: false,
		gtag: '',
	}

	constructor(props: Props) {
		super(props)
		this.state = {
			appleIcon: '',
			description: '',
			themeColor: '',
		}
	}

	componentDidMount(): void {
		// fetch properties from manifest.json
		fetch(`${process.env.PUBLIC_URL}/manifest.json`)
			.then((res: Response) => res.json())
			.then((json: { [key: string]: any }) => {
				// find apple icon
				let appleIcon: string = ''
				for (let icon of json.icons) {
					if (icon.sizes === '192x192') {
						appleIcon = icon.src
						break
					}
				}
				this.setState({
					appleIcon,
					description: json.description || '',
					themeColor: json.theme_color || '',
				})
			})
	}

	render(): JSX.Element {
		return (
			<Helmet>
				<title>{this.props.title}</title>
				<meta charSet='utf-8' />
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
				{this.props.children && this.props.children}
			</Helmet>
		)
	}
}
