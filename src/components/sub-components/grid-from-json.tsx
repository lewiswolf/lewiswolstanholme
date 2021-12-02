// dependencies
import React from 'react'

interface Props {
	children: (obj: any, i: number) => JSX.Element
	gridSpacer?: number
	json: string | { [key: string]: any }[]
	maxHeight?: number
	maxWidth?: number
}

interface State {
	gridDim: number
	gridWidth: string
	json: { [key: string]: any }[]
	maxCol: string
}

export default class GridFromJSON extends React.Component<Props, State> {
	/*
	Create a responsive grid of child elements, evenly spaced and centered 
	within the parent element.
	*/

	static defaultProps = {
		maxHeight: 280,
		maxWidth: 280,
		gridSpacer: 20,
	}

	private self: React.RefObject<HTMLDivElement>

	constructor(props: Props) {
		super(props)
		this.state = {
			json: [],
			gridDim: 0,
			gridWidth: '',
			maxCol: '',
		}
		this.self = React.createRef()
		this.gridResponse = this.gridResponse.bind(this)
	}

	componentDidMount(): void {
		if (typeof this.props.json === 'string') {
			fetch(this.props.json)
				.then((res: Response) => res.json())
				.then((json: { [key: string]: any }[]) =>
					this.setState({ json }, (): void => {
						window.addEventListener('resize', this.gridResponse)
						this.gridResponse()
					})
				)
		} else {
			this.setState({ json: this.props.json })
		}
	}

	componentWillUnmount(): void {
		window.removeEventListener('resize', this.gridResponse)
	}

	gridResponse = (): void => {
		const contentWidth: number = this.self.current!.parentElement!.getBoundingClientRect().width
		const largestGrid: number =
			this.state.json.length * (this.props.maxWidth! + this.props.gridSpacer!) - this.props.gridSpacer!

		this.setState({
			gridDim: contentWidth < this.props.maxWidth! ? contentWidth : this.props.maxWidth!,
			gridWidth: contentWidth > largestGrid ? `${largestGrid}px` : '100%',
			maxCol: contentWidth > largestGrid ? `${this.state.json.length}` : 'auto-fill',
		})
	}

	render(): JSX.Element {
		return (
			<div
				ref={this.self}
				style={{
					width: this.state.gridWidth,
					display: 'grid',
					gridTemplateColumns: `repeat(${this.state.maxCol}, ${this.state.gridDim}px)`,
					gridAutoRows: `${this.props.maxHeight}px`,
					columnGap: `${this.props.gridSpacer}px`,
					rowGap: `${this.props.gridSpacer}px`,
					justifyContent: 'space-evenly',
					justifyItems: 'center',
					alignItems: 'center',
					margin: '0 auto',
				}}
			>
				{this.state.json.map((obj: any, i: number): JSX.Element => this.props.children(obj, i))}
			</div>
		)
	}
}
