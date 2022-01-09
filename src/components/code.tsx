// dependencies
import { useEffect } from 'react'
import { Umenu, TextButton } from 'maxmsp-gui'
import { useLocation, useNavigate } from 'react-router-dom'

// src
import { projects } from '../config/code'

export default function Code(): JSX.Element {
	const pages: string[] = Object.keys(projects)
	const location: string = useLocation().search.slice(6)
	const navigate = useNavigate()

	useEffect(() => {
		if (pages.indexOf(location) === -1) {
			navigate(`/code?view=${pages[0]}`)
		}
	}, [location])

	return (
		<>
			<header>
				<Umenu
					ariaLabel='What code project would you like to see?'
					items={pages.map((key: string) => projects[key]?.name)}
					value={pages.indexOf(location) !== -1 ? pages.indexOf(location) : 0}
					width={255}
					onChange={(i: number) => navigate(`/code?view=${pages[i]}`)}
				/>
				<TextButton
					ariaLabel='Open this project on GitHub.'
					text='GitHub'
					onClick={() => {
						window.open(`https://github.com/${projects[location]?.github}`, '_blank')
					}}
				/>
			</header>
		</>
	)
}

// links need descriptive text

// export default class Code extends Component {
// 	state = {
// 		json: [],
// 		indexVisible: null,
// 	}

// 	componentDidMount() {
// 		fetch(`${process.env.PUBLIC_URL}/config/code.json`)
// 			.then((res) => res.json())
// 			.then((json) => {
// 				const searchParam = parseInt(
// 					new URLSearchParams(this.props.location.search).get('id')
// 				)
// 				if (searchParam && searchParam < json.length) {
// 					this.setState({ json, indexVisible: searchParam })
// 				} else {
// 					this.setState(
// 						{
// 							json,
// 							indexVisible: 0,
// 						},
// 						() => this.props.history.replace('?id=0')
// 					)
// 				}
// 			})
// 	}

// 	componentDidUpdate(prevProps) {
// 		if (this.props.location.search !== prevProps.location.search) {
// 			const searchParam = parseInt(new URLSearchParams(this.props.location.search).get('id'))
// 			if (searchParam >= 0 && searchParam < this.state.json.length) {
// 				this.setState({ indexVisible: searchParam })
// 			} else {
// 				this.props.history.replace('?id=0')
// 			}
// 		}
// 	}

// 	render() {
// 		return (
// 			this.state.indexVisible !== null && (
// 				<React.Fragment>
// 					<div className='header' id='code-header'>
// 						<div className='maxstuff'>
// 							<MaxMSP.Umenu
// 								ariaLabel='Code projects'
// 								items={this.state.json.map((obj) => obj.name)}
// 								value={this.state.indexVisible}
// 								width={255}
// 								onChange={(index) => this.props.history.push(`?id=${index}`)}
// 							/>
// 							<MaxMSP.TextButton
// 								ariaLabel='Open this project in GitHub'
// 								text='GitHub'
// 								onClick={(e) =>
// 									window.open(
// 										this.state.json[this.state.indexVisible].github,
// 										'_blank'
// 									)
// 								}
// 							/>
// 						</div>
// 					</div>
// 					<main className='code'>
// 						<Repository {...this.state.json[this.state.indexVisible]} />
// 					</main>
// 				</React.Fragment>
// 			)
// 		)
// 	}
// }

// class Repository extends Component {
// 	state = {
// 		md: null,
// 	}

// 	componentDidMount() {
// 		if (this.props.readme) {
// 			fetch(this.props.readme)
// 				.then((res) => res.text())
// 				.then((md) => {
// 					this.setState(
// 						{
// 							md:
// 								md.slice(0, this.props.name.length + 3) +
// 								md.slice(this.props.name.length + 22),
// 						},
// 						() => {
// 							if (this.props.codeSyntax === 'KSP') {
// 								this.KSPsyntax()
// 							}
// 						}
// 					)
// 				})
// 		} else {
// 			this.setState({ md: null })
// 		}
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevProps !== this.props) {
// 			if (this.props.readme) {
// 				fetch(this.props.readme)
// 					.then((res) => res.text())
// 					.then((md) => {
// 						this.setState({
// 							md:
// 								md.slice(0, this.props.name.length + 3) +
// 								md.slice(this.props.name.length + 22),
// 						})
// 					})
// 			} else {
// 				this.setState({ md: null })
// 			}
// 		}
// 		// if (prevState.md !== this.state.md && ReactDOM.findDOMNode(this).getElementsByTagName('pre')) {
// 		// 	if (this.props.codeSyntax === 'KSP') {
// 		// 		console.log('bang')
// 		// 		this.KSPsyntax()
// 		// 	}
// 		// }
// 	}

// 	codeBlock = ({ language, value }) => {
// 		return (
// 			<SyntaxHighlighter language={language} style={coy}>
// 				{value}
// 			</SyntaxHighlighter>
// 		)
// 	}

// 	KSPsyntax = () => {
// 		let code = ReactDOM.findDOMNode(this).getElementsByTagName('pre')[0]
// 		code.innerHTML = code.innerHTML
// 			.replace(/[0-9]/g, (x) => {
// 				return `<span style="color: rgb(166, 127, 89);">${x}</span>`
// 			})
// 			.replace(/([$%])\w+/g, (x) => {
// 				return `<span style="color: rgb(201, 44, 44);">${x}</span>`
// 			})
// 			.replace(/change_tune | if | declare polyphonic | declare/g, (x) => {
// 				return `<span style="color: rgb(47, 156, 10);">${x}</span>`
// 			})
// 			.replace(/end if/g, (x) => {
// 				return `<span style="color: rgb(47, 156, 10);">${x}</span>`
// 			})
// 			.replace(/(?:\S+\s)?\S*\s(on)\S*(?:\s\S+)?/g, (x) => {
// 				return `<span style="color: rgb(25, 144, 184);">${x}</span>`
// 			})
// 			.replace(/on init\s/g, (x) => {
// 				return `<span style="color: rgb(25, 144, 184);">${x}</span>`
// 			})
// 	}

// 	render() {
// 		return (
// 			<div className='repository'>
// 				{this.props.img && (
// 					<img
// 						src={`${process.env.PUBLIC_URL}/images/${this.props.img}`}
// 						alt={this.props.id}
// 					/>
// 				)}
// 				{this.props.iframe && (
// 					<div style={{ height: 'fit-content', width: '100%' }} onClick={() => {}}>
// 						<IframeResizer
// 							checkOrigin={false}
// 							scrolling={true}
// 							bodyBackground={this.props.iframeOverrideBG ? 'unset' : null}
// 							src={this.props.iframe}
// 							title={this.props.id}
// 						/>
// 					</div>
// 				)}
// 				{this.props.readme && (
// 					<ReactMarkdown
// 						className='readme'
// 						children={this.state.md}
// 						{...(this.props.codeSyntax === 'default' && {
// 							renderers: { code: this.codeBlock },
// 						})}
// 					/>
// 				)}
// 			</div>
// 		)
// 	}
// }
