// dependencies
import { Slider } from 'maxmsp-gui'
import { useState } from 'react'

export default function Home(): JSX.Element {
	const [slider, setSlider] = useState<number>(0)

	return (
		<>
			<div className='header' id='home-header'>
				<Slider fidelity={1000} length={200} onChange={(v: number) => setSlider(v)} />
			</div>
			<main
				className='home'
				style={{
					opacity: slider / 1000,
				}}
			></main>
		</>
	)
}
