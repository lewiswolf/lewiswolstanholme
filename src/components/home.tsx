// dependencies
import { Slider } from 'maxmsp-gui'
import { useState } from 'react'

export default function Home(): JSX.Element {
	const [visibility, setVisitibility] = useState<number>(0)

	return (
		<>
			<div className='header' id='home-header'>
				<Slider fidelity={1000} length={200} onChange={(v: number) => setVisitibility(v)} />
			</div>
			<main
				className='home'
				style={{
					opacity: visibility / 1000,
				}}
			></main>
		</>
	)
}
