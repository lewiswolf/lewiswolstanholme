import React, { Component } from 'react'
import * as MaxMSP from 'maxmsp-gui'
import P5 from './sub-components/p5'
import sketch2 from '../sketch/triangles'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			height: window.matchMedia('(max-width: 812px)').matches ? 'calc(100vh - 280px)' : 'calc(100vh - 200px)',
			sliderValue: 0,
			isPlaying: false,
			audioError: false,
		}
		// this.volumeRamp = null
		this.audio = React.createRef()
		this.resize = this.resize.bind(this)
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize)
		this.audio.current.volume = 0
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize)
		this.audio.current.pause()
		this.audio.current.currentTime = 0
	}

	resize = () => {
		this.setState({
			height: window.matchMedia('(max-width: 812px)').matches ? 'calc(100vh - 280px)' : 'calc(100vh - 200px)',
		})
	}

	audioPlay = (value) => {
		// if (this.volumeRamp) {
		// 	clearInterval(this.volumeRamp)
		// 	this.volumeRamp = null
		// }
		// let volumeChange = (value / 1000 - this.audio.current.volume) / 100
		// this.volumeRamp = setInterval(() => {
		// 	if (Math.round(this.audio.current.volume * 1000) === value) {
		// 		clearInterval(this.volumeRamp)
		// 		this.volumeRamp = null
		// 	}
		// 	this.audio.current.volume = this.audio.current.volume + volumeChange
		// 	console.log(this.audio.current.volume)
		// }, 1)

		this.audio.current.volume = value / 1000

		if (value !== 0) {
			if (!this.state.isPlaying) {
				try {
					this.audio.current.play()
					this.setState({
						sliderValue: value,
						isPlaying: true,
					})
				} catch {
					this.setState({
						sliderValue: value,
						isPlaying: false,
						audioError: true,
					})
				}
			} else {
				this.setState({
					sliderValue: value,
				})
			}
		} else {
			this.audio.current.pause()
			this.audio.current.currentTime = 0
			this.setState({
				sliderValue: value,
				isPlaying: false,
			})
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className='header' id='home-header'>
					<MaxMSP.Slider length={200} onChange={(value) => this.audioPlay(value)} fidelity={1000} />
				</div>
				<main
					className='home'
					style={{
						height: this.state.height,
						opacity: this.state.sliderValue / 1000,
					}}
				>
					<P5 src={sketch2} />
					<audio
						ref={this.audio}
						src={`${process.env.PUBLIC_URL}/audio/newts.mp3`}
						style={{ display: 'none' }}
					/>
				</main>
			</React.Fragment>
		)
	}
}
