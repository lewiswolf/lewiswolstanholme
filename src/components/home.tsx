// dependencies
import { Slider } from 'maxmsp-gui'
import { useEffect, useRef, useState } from 'react'

// src
import { P5 } from './sub-components/p5'
import sketch from '../sketch'

export default function Home(): JSX.Element {
	const fidelity: number = 1000
	const audio = useRef<HTMLAudioElement>(null)
	const [visibility, setVisitibility] = useState<number>(0)

	useEffect(() => {
		if (audio.current !== null) {
			audio.current.volume = visibility / fidelity
			if (visibility !== 0) {
				audio.current.play()
			} else {
				audio.current.pause()
			}
		}
	}, [visibility])

	return (
		<>
			<header>
				<Slider
					fidelity={fidelity}
					width={200}
					onChange={(v: number) => setVisitibility(v)}
				/>
			</header>
			<main className='home' style={{ opacity: visibility / fidelity }}>
				<audio ref={audio} src='/audio/newts.mp3' />
				<P5 sketch={sketch} />
			</main>
		</>
	)
}
