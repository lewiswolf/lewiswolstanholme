// biome-ignore-all lint/a11y/useMediaCaption : the audio file is music and does not have captions

// dependencies
import { Slider } from 'maxmsp-gui'
import { type JSX, useEffect, useRef, useState } from 'react'

// src
import { P5 } from '../modules/p5.tsx'
import sketch from '../sketch/index.ts'
import '../scss/home.scss'

export default function Home(): JSX.Element {
	const audio = useRef<HTMLAudioElement>(null)
	const [opacity, setOpacity] = useState<number>(0)

	useEffect(() => {
		if (audio.current) {
			audio.current.volume = opacity
			if (opacity === 0) {
				audio.current.pause()
			} else if (audio.current.paused) {
				void audio.current.play()
			}
		}
	}, [opacity])

	// event handlers
	const _onSlider = (v: number): void => {
		setOpacity(v)
	}

	return (
		<>
			<header>
				<Slider ariaLabel='audiovisual control' onChange={_onSlider} width={200} />
			</header>
			<main className='home'>
				<audio ref={audio} src='/audio/newts.mp3' />
				<P5 opacity={opacity} sketch={sketch} />
			</main>
		</>
	)
}
