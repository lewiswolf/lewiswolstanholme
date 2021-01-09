import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class GridFromJSON extends Component {
	static defaultProps = {
		maxHeight: 280,
		maxWidth: 280,
		gridSpacer: 20,
		json: null,
	}

	constructor(props) {
		super(props)
		this.state = {
			json: [],
			gridDim: 0,
			gridWidth: '',
			maxColl: '',
		}
		this.gridResponse.bind(this)
	}

	componentDidMount() {
		this.props.json &&
			fetch(this.props.json)
				.then((res) => res.json())
				.then((json) =>
					this.setState(
						{
							json,
						},
						() => {
							window.addEventListener('resize', this.gridResponse)
							this.gridResponse()
						}
					)
				)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.gridResponse)
	}

	gridResponse = () => {
		let contentWidth = findDOMNode(this).parentElement.getBoundingClientRect().width
		let largestGrid = this.state.json.length * (this.props.maxWidth + this.props.gridSpacer) - this.props.gridSpacer

		this.setState({
			gridDim: contentWidth < this.props.maxWidth ? contentWidth : this.props.maxWidth,
			gridWidth: contentWidth > largestGrid ? `${largestGrid}px` : '100%',
			maxColl: contentWidth > largestGrid ? this.state.json.length : 'auto-fill',
		})
	}

	render() {
		return (
			<div
				style={{
					width: this.state.gridWidth,
					display: 'grid',
					gridTemplateColumns: `repeat(${this.state.maxColl}, ${this.state.gridDim}px)`,
					gridAutoRows: `${this.props.maxHeight}px`,
					columnGap: `${this.props.gridSpacer}px`,
					rowGap: `${this.props.gridSpacer}px`,
					justifyContent: 'space-evenly',
					justifyItems: 'center',
					alignItems: 'center',
					margin: '0 auto',
				}}
			>
				{this.state.json.map((obj, i) => this.props.children(obj, i, this.props.maxWidth))}
			</div>
		)
	}
}
