// dependencies
import { Slider } from 'maxmsp-gui'
import { type JSX, useEffect, useRef, useState } from 'react'

// src
import { P5 } from '../modules/p5.tsx'
import sketch from '../sketch/index.ts'
import '../scss/home.scss'

export default function Home(): JSX.Element {
	const audio = useRef<HTMLAudioElement>(null)
	const [visibility, setVisitibility] = useState<number>(0)

	useEffect(() => {
		if (audio.current) {
			audio.current.volume = visibility
			if (visibility !== 0) {
				void audio.current.play()
			} else {
				audio.current.pause()
			}
		}
	}, [visibility])

	return (
		<>
			<header>
				<Slider
					ariaLabel='audiovisual control'
					width={200}
					onChange={(v: number) => {
						setVisitibility(v)
					}}
				/>
			</header>
			<main className='home' style={{ opacity: visibility }}>
				<audio ref={audio} src='/audio/newts.mp3' />
				{P5(sketch)}
			</main>
		</>
	)
}
