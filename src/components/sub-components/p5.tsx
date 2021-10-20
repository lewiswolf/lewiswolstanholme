import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

interface Props {
	src: Function
}

interface State {
	height: number
	width: number
	mounted: boolean
}

export default class p5 extends React.PureComponent<Props, State> {
	/*
	This component serves as an extra wrapper around react-p5-wrapper, which
	serves to responsively resize the canvas to fill it's parent container.
	*/

	private self: React.RefObject<HTMLDivElement>

	constructor(props: Props) {
		super(props)
		this.state = {
			height: 0,
			width: 0,
			mounted: false,
		}
		this.self = React.createRef()
		this.resize = this.resize.bind(this)
	}

	componentDidMount(): void {
		window.addEventListener('resize', this.resize)
		const parent = this.self.current!.parentElement!.getBoundingClientRect()
		this.setState({
			height: parent.height,
			width: parent.width,
			mounted: true,
		})
	}

	componentWillUnmount(): void {
		window.removeEventListener('resize', this.resize)
	}

	resize = (): void => {
		const parent = this.self.current!.parentElement!.getBoundingClientRect()
		if ([this.state.height, this.state.width] !== [parent.height, parent.width]) {
			this.setState({
				height: parent.height,
				width: parent.width,
			})
		}
	}

	render(): JSX.Element {
		return (
			<div
				ref={this.self}
				className='p5'
				style={{
					height: '100%',
					width: '100%',
					fontSize: 0,
				}}
			>
				{this.state.mounted && (
					<P5Wrapper height={this.state.height} width={this.state.width} sketch={this.props.src} />
				)}
			</div>
		)
	}
}
